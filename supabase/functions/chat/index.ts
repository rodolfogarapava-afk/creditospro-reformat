import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GEMINI_MODEL = "gemini-1.5-flash";

const SYSTEM_PROMPT = `Você é o assistente virtual da LittleShark, especializado em ajudar clientes com créditos Lovable.

INFORMAÇÕES SOBRE OS PLANOS:

🔥 PLANO MAIS VENDIDO - 50 Créditos:
- Preço oficial Lovable: R$ 72,50
- Preço LittleShark: R$ 9,90
- Economia: R$ 62,60 (86% OFF)
- Válido apenas na primeira compra
- Já vendemos mais de 55 unidades

⚡ OFERTA ESPECIAL - 100 Créditos:
- Preço oficial Lovable: R$ 145,00
- Preço LittleShark: R$ 29,90
- Economia: R$ 115,10 (79% OFF)
- Válido apenas na primeira compra
- Mais de 26 vendidos

📦 200 Créditos:
- Preço oficial: R$ 290,00
- Preço LittleShark: R$ 84,90
- Economia: R$ 205,10 (71% OFF)

🚀 500 Créditos:
- Preço oficial: R$ 725,00
- Preço LittleShark: R$ 147,90
- Economia: R$ 577,10 (80% OFF)

💎 1.000 Créditos:
- Preço oficial: R$ 1.450,00
- Preço LittleShark: R$ 249,90
- Economia: R$ 1.200,10 (83% OFF)

🔥 HOT - 5.000 Créditos:
- Preço oficial: R$ 7.250,00
- Preço LittleShark: R$ 921,90
- Economia: R$ 6.328,10 (87% OFF)

POLÍTICAS:
✅ Entrega em até 1 hora após confirmação de pagamento
✅ Estoque ilimitado em todos os planos
✅ Economia de até 87% comparado ao preço oficial
✅ Planos de 50 e 100 créditos válidos apenas na primeira compra

COMO FUNCIONA:
1. Escolha seu plano
2. Realize o pagamento
3. Receba seus créditos em até 1 hora
4. Use no Lovable para criar suas aplicações

Sua missão é:
- Responder perguntas sobre os planos de forma clara
- Ajudar o cliente a escolher o melhor plano para suas necessidades
- Esclarecer dúvidas sobre preços, descontos e entrega
- Ser sempre educado, prestativo e profissional
- Destacar as vantagens de comprar pela LittleShark (economia de até 87%)

Mantenha respostas concisas e objetivas.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY não está configurada");
    }

    console.log("Recebida requisição de chat com", messages.length, "mensagens");

    // Preparar mensagens no formato do Gemini
    const contents = messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    // Adicionar system prompt como primeira mensagem do usuário
    contents.unshift({
      role: "user",
      parts: [{ text: SYSTEM_PROMPT }]
    });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro da API Gemini:", response.status, errorText);
      throw new Error("Erro ao processar com Gemini");
    }

    console.log("Streaming resposta do Gemini");

    // Converter stream do Gemini para formato SSE
    const reader = response.body?.getReader();
    const encoder = new TextEncoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              if (line.trim() && line.includes("text")) {
                try {
                  const jsonMatch = line.match(/\{.*\}/);
                  if (jsonMatch) {
                    const data = JSON.parse(jsonMatch[0]);
                    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                    
                    if (text) {
                      const sseData = {
                        choices: [{
                          delta: { content: text }
                        }]
                      };
                      controller.enqueue(
                        encoder.encode(`data: ${JSON.stringify(sseData)}\n\n`)
                      );
                    }
                  }
                } catch (e) {
                  console.error("Erro ao processar chunk:", e);
                }
              }
            }
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          console.error("Erro no streaming:", error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });

  } catch (error) {
    console.error("Erro no chat:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
