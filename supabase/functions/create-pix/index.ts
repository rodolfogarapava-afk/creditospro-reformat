import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SHARPIFY_API_URL = "https://api.sharpify.com.br/checkout/order/place-order";
const STORE_ID = "019b0963-c219-757e-b3a6-3e5b55bcd923";

// Map credits to product IDs - update these with real product IDs
const PRODUCT_MAP: Record<number, string> = {
  100: "019b0964-f923-712b-b8e1-45bef4f3256f",
  200: "019b0964-f923-712b-b8e1-45bef4f3256f",
  300: "019b0964-f923-712b-b8e1-45bef4f3256f",
  400: "019b0964-f923-712b-b8e1-45bef4f3256f",
  500: "019b0964-f923-712b-b8e1-45bef4f3256f",
  600: "019b0964-f923-712b-b8e1-45bef4f3256f",
  700: "019b0964-f923-712b-b8e1-45bef4f3256f",
  800: "019b0964-f923-712b-b8e1-45bef4f3256f",
  900: "019b0964-f923-712b-b8e1-45bef4f3256f",
  1000: "019b0964-f923-712b-b8e1-45bef4f3256f",
  2000: "019b0964-f923-712b-b8e1-45bef4f3256f",
  3000: "019b0964-f923-712b-b8e1-45bef4f3256f",
  4000: "019b0964-f923-712b-b8e1-45bef4f3256f",
  5000: "019b0964-f923-712b-b8e1-45bef4f3256f",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, credits } = await req.json();

    if (!name || !email || !credits) {
      return new Response(
        JSON.stringify({ error: "Nome, email e créditos são obrigatórios" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const productId = PRODUCT_MAP[credits];
    if (!productId) {
      return new Response(
        JSON.stringify({ error: "Plano de créditos inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Split name into first and last name
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || firstName;

    // Generate session ID
    const sessionId = crypto.randomUUID();

    const orderPayload = {
      storeId: STORE_ID,
      payment: { gatewayMethod: "PIX" },
      products: [
        {
          productId: productId,
          productItemId: productId,
          quantity: 1,
          customFields: {},
        },
      ],
      couponCode: null,
      customer: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        sessionId: sessionId,
      },
      affiliateCode: null,
    };

    console.log("Creating PIX order:", JSON.stringify(orderPayload));

    const response = await fetch(`${SHARPIFY_API_URL}?storeId=${STORE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-token": "",
        "customer_access_token": "undefined",
      },
      body: JSON.stringify(orderPayload),
    });

    const data = await response.json();
    console.log("Sharpify response:", JSON.stringify(data));

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Erro ao criar pedido PIX", details: data }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating PIX:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno ao processar pagamento" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
