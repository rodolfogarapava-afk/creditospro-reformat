import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Check, Clock, ArrowLeft, Loader2, QrCode } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface PixCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  credits: number;
  price: number;
}

type CheckoutStep = "form" | "payment";

interface PixData {
  qrCode: string;
  qrCodeBase64: string;
  expiresAt: string;
}

const PixCheckout = ({ isOpen, onClose, credits, price }: PixCheckoutProps) => {
  const [step, setStep] = useState<CheckoutStep>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [pixData, setPixData] = useState<PixData | null>(null);

  // Timer countdown
  useEffect(() => {
    if (step !== "payment" || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          toast.error("Tempo expirado! Gere um novo QR Code.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (!email.includes("@")) {
      toast.error("E-mail inválido");
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("create-pix", {
        body: { name, email, credits },
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log("PIX response:", data);

      // Extract PIX data from response - adjust based on actual API response structure
      if (data?.payment?.pix) {
        setPixData({
          qrCode: data.payment.pix.qrCode || data.payment.pix.code || "",
          qrCodeBase64: data.payment.pix.qrCodeBase64 || data.payment.pix.qrcode || "",
          expiresAt: data.payment.pix.expiresAt || "",
        });
      } else if (data?.pix) {
        setPixData({
          qrCode: data.pix.qrCode || data.pix.code || "",
          qrCodeBase64: data.pix.qrCodeBase64 || data.pix.qrcode || "",
          expiresAt: data.pix.expiresAt || "",
        });
      }

      setTimeLeft(15 * 60);
      setStep("payment");
    } catch (error) {
      console.error("Error creating PIX:", error);
      toast.error("Erro ao gerar PIX. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = async () => {
    const codeToCopy = pixData?.qrCode || "";
    if (!codeToCopy) {
      toast.error("Código PIX não disponível");
      return;
    }
    
    try {
      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      toast.success("Código PIX copiado!");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error("Erro ao copiar código");
    }
  };

  const handleClose = () => {
    setStep("form");
    setName("");
    setEmail("");
    setCopied(false);
    setTimeLeft(15 * 60);
    setPixData(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden border-border bg-background">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-blue-600 p-4 text-white">
          <div className="flex items-center gap-3">
            {step === "payment" && (
              <button
                onClick={() => setStep("form")}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <h2 className="text-lg font-bold">Finalizar Compra</h2>
              <p className="text-sm text-white/80">
                {credits.toLocaleString("pt-BR")} Créditos
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "form" ? (
            <form onSubmit={handleSubmitForm} className="space-y-5">
              {/* Order Summary */}
              <div className="bg-muted/50 rounded-xl p-4 border border-border">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Produto</span>
                  <span className="font-medium text-foreground">
                    {credits.toLocaleString("pt-BR")} Créditos
                  </span>
                </div>
                <div className="border-t border-border my-3" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    R$ {price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nome completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 bg-background border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-background border-border"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white font-semibold text-base"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Gerando PIX...
                  </>
                ) : (
                  "Gerar QR Code PIX"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                🔒 Seus dados estão seguros e protegidos
              </p>
            </form>
          ) : (
            <div className="space-y-5">
              {/* Timer */}
              <div className="flex items-center justify-center gap-2 text-amber-500 bg-amber-500/10 rounded-lg p-3 border border-amber-500/20">
                <Clock className="w-5 h-5" />
                <span className="font-medium">
                  Expira em: <span className="font-bold">{formatTime(timeLeft)}</span>
                </span>
              </div>

              {/* QR Code Area */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-border">
                  {pixData?.qrCodeBase64 ? (
                    <img
                      src={pixData.qrCodeBase64.startsWith("data:") ? pixData.qrCodeBase64 : `data:image/png;base64,${pixData.qrCodeBase64}`}
                      alt="QR Code PIX"
                      className="w-48 h-48 rounded-xl"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                      <QrCode className="w-32 h-32 text-gray-400" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Escaneie o QR Code com seu app de banco
                </p>
              </div>

              {/* PIX Copy-Paste */}
              <div className="space-y-2">
                <Label className="text-foreground text-sm">Ou copie o código PIX:</Label>
                <div className="relative">
                  <Input
                    value={pixData?.qrCode || ""}
                    readOnly
                    className="h-12 pr-24 bg-muted/50 border-border text-xs font-mono"
                  />
                  <Button
                    type="button"
                    onClick={handleCopyCode}
                    className={`absolute right-1 top-1 h-10 px-4 ${
                      copied
                        ? "bg-success hover:bg-success text-white"
                        : "bg-primary hover:bg-primary/90 text-white"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copiar
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-muted/50 rounded-xl p-4 border border-border">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Cliente</span>
                  <span className="font-medium text-foreground">{name}</span>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-muted-foreground">E-mail</span>
                  <span className="font-medium text-foreground">{email}</span>
                </div>
                <div className="border-t border-border my-3" />
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Total a pagar</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    R$ {price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                Após o pagamento, seus créditos serão liberados automaticamente
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PixCheckout;
