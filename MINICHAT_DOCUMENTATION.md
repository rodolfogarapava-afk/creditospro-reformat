# 📱 Documentação Completa do MiniChat

## 📋 Visão Geral

O MiniChat é um assistente virtual integrado ao site para atendimento automatizado de clientes interessados em créditos Lovable. Utiliza a API Gemini para processamento de linguagem natural com streaming de respostas.

---

## 🛠️ Arquitetura Técnica

### Componentes Principais

1. **Frontend:** `src/components/ChatWidget.tsx`
2. **Backend:** `supabase/functions/chat/index.ts`
3. **API:** Google Gemini 2.5 Flash (streaming SSE)

### Tecnologias Utilizadas

- React + TypeScript
- Tailwind CSS
- Supabase Edge Functions (Deno)
- Google Gemini API (v1)
- Server-Sent Events (SSE) para streaming

---

## 🎨 Design e Interface

### Cores do Gradiente
- **Header:** `from-red-500 to-cyan-500`
- **FAB (Floating Action Button):** `from-red-500 to-cyan-500`
- **Mensagens do usuário:** `from-red-500 to-cyan-500`
- **Botão de pagamento:** `from-red-500 to-cyan-500`
- **Botão WhatsApp:** `#25D366`

### Dimensões
- **Desktop:** 380px × 500px (canto inferior direito)
- **Mobile:** Tela cheia (fullscreen)

### Animações
- Entrada: `animate-scale-in`
- Loading: pulso com delay progressivo

---

## ⚡ Ações Rápidas (Quick Actions)

```javascript
const quickActions = [
  { label: "Ver Planos", action: "Quais são os planos disponíveis e seus preços?" },
  { label: "Como Funciona", action: "Como funciona o processo de compra?" },
  { label: "Horário", action: "Qual é o horário de atendimento?" },
  { label: "Falar com Suporte", action: "whatsapp" }
];
```

---

## 📞 Contato WhatsApp

```javascript
const WHATSAPP_NUMBER = "5511955784473";
const WHATSAPP_MESSAGE = "Olá! Tenho uma dúvida sobre os créditos Lovable.";
```

**URL completa:** `https://wa.me/5511955784473?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20créditos%20Lovable.`

---

## 💰 Tabela de Preços e Links de Pagamento

| Créditos | Preço | Economia | Link de Pagamento |
|----------|-------|----------|-------------------|
| 50 | R$ 9,90 | 86% OFF | https://pix-lite-checkout.lovable.app/pay-1 |
| 100 | R$ 19,90 | 86% OFF | https://pix-lite-checkout.lovable.app/pay-2 |
| 200 | R$ 38,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-3 |
| 300 | R$ 56,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-4 |
| 400 | R$ 75,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-5 |
| 500 | R$ 93,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-6 |
| 600 | R$ 112,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-7 |
| 700 | R$ 130,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-8 |
| 800 | R$ 149,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-9 |
| 900 | R$ 167,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-10 |
| 1.000 | R$ 186,90 | 87% OFF | https://pix-lite-checkout.lovable.app/pay-11 |
| 2.000 | R$ 373,90 | 87% OFF | Consultar WhatsApp |
| 3.000 | R$ 560,90 | 87% OFF | Consultar WhatsApp |
| 4.000 | R$ 747,90 | 87% OFF | Consultar WhatsApp |
| 5.000 | R$ 934,90 | 87% OFF | Consultar WhatsApp |

**Nota:** Planos acima de 1.000 créditos direcionam para WhatsApp.

---

## ⏰ Horário de Atendimento

- **Dias:** Segunda a Domingo (todos os dias)
- **Horário:** 09:00 às 00:00 (Horário de Brasília)
- **Entrega:** Até 1 hora dentro do horário de atendimento
- **Fora do horário:** Processado no próximo período

---

## 🔄 Processo de Compra

1. **Escolha do Plano** - Cliente navega e seleciona o plano desejado
2. **Realização da Compra** - Checkout externo seguro via PIX
3. **Envio de Informações** - Chat automático para:
   - E-mail usado na compra
   - Link de convite da conta Lovable
4. **Recebimento dos Créditos** - Via sistema oficial de indicação (até 1h)

---

## 🤖 Marcadores Especiais

### Botão de Pagamento
```
[BOTAO_PAGAMENTO:https://pix-lite-checkout.lovable.app/pay-1]
```
- Renderiza botão verde gradiente com texto "💳 Finalizar Compra"
- URL deve estar em linha única sem quebras

### Botão WhatsApp
```
[BOTAO_WHATSAPP]
```
- Renderiza botão verde (#25D366) com texto "📱 Clique aqui para falar no WhatsApp"

---

## ❓ FAQ Integrado

### Q1: Oferta de Teste (50 créditos)
Plano promocional exclusivo para primeira compra. Permite testar o sistema.

### Q2: Recebimento de créditos
Após pagamento, chat abre automaticamente. Enviar e-mail e link de convite.

### Q3: Por que preciso do link de convite?
Necessário para enviar créditos via sistema oficial de indicação da Lovable.

### Q4: Prazo de entrega
Até 1 hora dentro do horário de atendimento.

### Q5: Risco para conta
Nenhum risco. Usa sistema oficial de indicação (100% seguro).

### Q6: Recargas múltiplas
Aguardar 24 horas entre recargas por segurança.

### Q7: Recargas no mesmo dia
Limitadas para segurança. Escolher pacote maior se precisar mais.

### Q8: Informações erradas
Avisar imediatamente no chat para correção.

### Q9: Segurança da compra
Sim, 100% seguro via sistema oficial.

### Q10: Crédito não entregue
Contatar WhatsApp imediatamente para verificação.

---

## 🎯 Configuração da IA

### Modelo
```
gemini-2.5-flash
```

### Endpoint
```
https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:streamGenerateContent?alt=sse
```

### Parâmetros de Geração
```json
{
  "temperature": 0.7,
  "topK": 40,
  "topP": 0.95,
  "maxOutputTokens": 1024
}
```

### Variável de Ambiente
```
GEMINI_API_KEY
```

---

## 📝 Regras de Formatação do Assistente

### ❌ NÃO USAR
- Asteriscos (`*texto*` ou `**texto**`)
- Sublinhado (`_texto_`)
- Aspas duplas para destaque (`"texto"`)
- Marcadores de lista com asterisco (`* item`)

### ✅ USAR
- Texto limpo com emojis
- Emojis para listas (✅, 🔹, ➡️)
- Respostas concisas (máx 3-4 linhas por tópico)
- Quebras de linha para separar informações

---

## ✨ Diferenciais a Destacar

- ✅ Economia de até 87% comparado ao preço oficial
- ✅ Entrega rápida: até 1 hora
- ✅ Sistema 100% seguro (indicação oficial Lovable)
- ✅ Atendimento 7 dias por semana
- ✅ Estoque ilimitado em todos os planos
- ✅ Suporte via WhatsApp

---

## 🔐 Tratamento de Erros

### Status 429 (Rate Limit)
```javascript
toast({
  title: "Muitas requisições",
  description: "Por favor, aguarde um momento antes de enviar outra mensagem.",
  variant: "destructive",
});
```

### Status 402 (Payment Required)
```javascript
toast({
  title: "Serviço indisponível",
  description: "Por favor, tente novamente mais tarde.",
  variant: "destructive",
});
```

### Erro Genérico
```javascript
toast({
  title: "Erro",
  description: "Não foi possível processar sua mensagem. Tente novamente.",
  variant: "destructive",
});
```

---

## 📂 Estrutura de Arquivos

```
src/
├── components/
│   ├── ChatWidget.tsx       # Componente principal do chat
│   └── WhatsAppButton.tsx   # Botão flutuante WhatsApp (separado)
│
supabase/
└── functions/
    └── chat/
        └── index.ts         # Edge function com Gemini
```

---

## 🚀 Como Atualizar

### Alterar Preços
1. Editar `SYSTEM_PROMPT` em `supabase/functions/chat/index.ts`
2. Atualizar tabela de preços e links correspondentes

### Alterar Horário de Atendimento
1. Editar seção "HORÁRIO DE ATENDIMENTO" no `SYSTEM_PROMPT`

### Adicionar Nova FAQ
1. Adicionar na seção "PERGUNTAS FREQUENTES" do `SYSTEM_PROMPT`

### Alterar WhatsApp
1. Editar `WHATSAPP_NUMBER` em `ChatWidget.tsx`
2. Atualizar número na seção "CONTATO E SUPORTE" do `SYSTEM_PROMPT`

### Alterar Cores
1. Editar classes Tailwind no `ChatWidget.tsx`
2. Gradientes: `from-red-500 to-cyan-500`

---

## 📊 Fluxo de Streaming

```
Cliente                    Edge Function              Gemini API
   |                            |                          |
   |------ POST /chat --------->|                          |
   |                            |------ POST stream ------>|
   |                            |<----- SSE chunks --------|
   |<----- SSE formatted -------|                          |
   |                            |                          |
   |<----- data: [DONE] --------|                          |
```

---

## 🎨 Mensagem Inicial

```javascript
{ role: "assistant", content: "Olá! 👋 Sou o assistente virtual. Como posso ajudar você hoje?" }
```

---

*Última atualização: Dezembro 2024*
