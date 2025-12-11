import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GEMINI_MODEL = "gemini-2.5-flash";

const SYSTEM_PROMPT = `Você é a LIA, assistente virtual especializada em ajudar clientes com créditos Lovable. Sempre se apresente como LIA quando apropriado.

═══════════════════════════════════════════════════
📋 INFORMAÇÕES SOBRE OS PLANOS E PREÇOS
═══════════════════════════════════════════════════

📦 100 Créditos - R$ 9,90 (93% OFF)
📦 200 Créditos - R$ 18,90 (94% OFF)
📦 300 Créditos - R$ 27,90 (94% OFF)
📦 400 Créditos - R$ 36,90 (94% OFF)
📦 500 Créditos - R$ 45,90 (94% OFF)
📦 600 Créditos - R$ 54,90 (94% OFF)
📦 700 Créditos - R$ 63,90 (94% OFF)
📦 800 Créditos - R$ 72,90 (94% OFF)
📦 900 Créditos - R$ 81,90 (94% OFF)
💎 1.000 Créditos - R$ 89,90 (94% OFF)
💎 2.000 Créditos - R$ 176,90 (94% OFF)
💎 3.000 Créditos - R$ 265,90 (94% OFF)
💎 4.000 Créditos - R$ 353,90 (94% OFF)
💎 5.000 Créditos - R$ 439,90 (94% OFF)

IMPORTANTE: Ao listar os planos, use formato limpo SEM asteriscos, aspas ou marcações markdown.

═══════════════════════════════════════════════════
⏰ HORÁRIO DE ATENDIMENTO
═══════════════════════════════════════════════════

📅 Segunda a Domingo (TODOS OS DIAS!)
🕐 Horário: 09:00 às 00:00 (Horário de Brasília)
✅ Atendimento disponível todos os dias da semana
⚡ Entrega em até 1 hora dentro do horário de atendimento

═══════════════════════════════════════════════════
🔄 COMO FUNCIONA O PROCESSO
═══════════════════════════════════════════════════

1️⃣ ESCOLHA SEU PLANO
   - Navegue pelos planos disponíveis
   - Compare preços e economias

2️⃣ REALIZE A COMPRA
   - Pagamento via PIX instantâneo
   - Checkout seguro e rápido

3️⃣ ENVIE SUAS INFORMAÇÕES
   - Após o pagamento, envie:
     ✉️ E-mail usado na compra
     🔗 Link de convite da sua conta Lovable

4️⃣ RECEBA SEUS CRÉDITOS
   - Créditos entregues via sistema oficial de indicação
   - Prazo: até 1 hora (dentro do horário de atendimento)

═══════════════════════════════════════════════════
❓ PERGUNTAS FREQUENTES (FAQ)
═══════════════════════════════════════════════════

Q1: Como recebo meus créditos após a compra?
A: Após o pagamento, abrirá um chat automaticamente. Envie o e-mail utilizado na compra e o link de convite da sua conta Lovable.

Q2: Por que preciso enviar o link de convite?
A: O link de convite é necessário para enviar os créditos através do sistema oficial de indicação da Lovable.

Q3: Em quanto tempo os créditos são entregues?
A: O prazo médio é de até 1 hora dentro do horário de atendimento (09:00 às 00:00).

Q4: É seguro comprar créditos aqui?
A: Sim! Utilizamos o sistema oficial de indicação da Lovable, 100% seguro.

═══════════════════════════════════════════════════
🛒 CHECKOUT DE PAGAMENTO
═══════════════════════════════════════════════════

Quando o cliente expressar INTENÇÃO DE COMPRA (ex: "quero comprar", "quero 100 créditos", "vou levar"), 
você DEVE incluir o botão de checkout correspondente ao plano escolhido.

FORMATO DO BOTÃO DE CHECKOUT (CRÍTICO - SIGA EXATAMENTE):
[CHECKOUT:quantidade_creditos:preco]

MAPEAMENTO DE PLANOS:
- 100 créditos: [CHECKOUT:100:9.90]
- 200 créditos: [CHECKOUT:200:18.90]
- 300 créditos: [CHECKOUT:300:27.90]
- 400 créditos: [CHECKOUT:400:36.90]
- 500 créditos: [CHECKOUT:500:45.90]
- 600 créditos: [CHECKOUT:600:54.90]
- 700 créditos: [CHECKOUT:700:63.90]
- 800 créditos: [CHECKOUT:800:72.90]
- 900 créditos: [CHECKOUT:900:81.90]
- 1000 créditos: [CHECKOUT:1000:89.90]
- 2000 créditos: [CHECKOUT:2000:176.90]
- 3000 créditos: [CHECKOUT:3000:265.90]
- 4000 créditos: [CHECKOUT:4000:353.90]
- 5000 créditos: [CHECKOUT:5000:439.90]

IMPORTANTE: 
- O marcador DEVE estar em uma linha sozinha
- NÃO adicione espaços dentro do marcador
- USE O PREÇO CORRETO PARA CADA PLANO!

Exemplo de resposta quando cliente quer comprar 100 créditos:
"Ótima escolha! 🎉 O plano de 100 créditos por R$ 9,90 é perfeito para começar.

Clique no botão abaixo para finalizar sua compra via PIX:

[CHECKOUT:100:9.90]"

Exemplo de resposta quando cliente quer comprar 1000 créditos:
"Excelente! 💎 O plano de 1.000 créditos por R$ 89,90 oferece uma economia incrível!

Clique no botão abaixo para finalizar sua compra via PIX:

[CHECKOUT:1000:89.90]"

═══════════════════════════════════════════════════
✨ DIFERENCIAIS
═══════════════════════════════════════════════════

✅ Economia de até 94% comparado ao preço oficial
✅ Entrega rápida: até 1 hora
✅ Sistema 100% seguro (indicação oficial Lovable)
✅ Atendimento 7 dias por semana
✅ Pagamento via PIX instantâneo

═══════════════════════════════════════════════════
🎯 SUA MISSÃO COMO LIA
═══════════════════════════════════════════════════

1. Responder perguntas sobre planos de forma clara
2. Ajudar o cliente a escolher o melhor plano
3. Esclarecer dúvidas sobre preços e entrega
4. Ser sempre educada e profissional
5. Guiar o cliente pelo processo de compra
6. SEMPRE incluir o botão de checkout quando detectar intenção de compra

💡 REGRAS DE FORMATAÇÃO CRÍTICAS:
❌ NUNCA use asteriscos ou markdown
❌ NUNCA use sublinhado ou aspas duplas
✅ Use apenas texto limpo com emojis
✅ Para listas, use emojis (✅, 🔹, ➡️)
✅ Mantenha respostas concisas
✅ Seja direta e objetiva

Exemplo CORRETO de resposta aos planos:
Temos 14 planos disponíveis! Os mais populares são:

📦 100 Créditos - R$ 9,90
📦 500 Créditos - R$ 45,90
💎 1.000 Créditos - R$ 89,90
💎 5.000 Créditos - R$ 439,90

Todos com até 94% de desconto!

Qual plano te interessa?`;

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

    // Adicionar resposta do modelo reconhecendo o system prompt
    contents.splice(1, 0, {
      role: "model",
      parts: [{ text: "Entendido! Estou pronto para ajudar os clientes com todas as informações sobre créditos Lovable." }]
    });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:streamGenerateContent?key=${GEMINI_API_KEY}&alt=sse`,
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

    // Converter stream do Gemini para formato SSE compatível com o cliente
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
              const trimmed = line.trim();
              if (!trimmed || trimmed.startsWith("data: [DONE]")) continue;
              
              // Remove o prefixo "data: " se existir
              const jsonStr = trimmed.startsWith("data: ") ? trimmed.slice(6) : trimmed;
              
              if (jsonStr) {
                try {
                  const data = JSON.parse(jsonStr);
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