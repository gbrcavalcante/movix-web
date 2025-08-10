import { InputOTPForm } from "@/components/input-otp-form";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full max-w-lg m-auto gap-8">
      <header className="flex flex-col gap-2 text-start">
        <TypographyH2>Recuperar Senha</TypographyH2>
        <TypographyP>
        Enviamos um código de verificação para o seu email. Digite o código 
        abaixo para confirmar sua identidade e redefinir sua senha.
        </TypographyP>
      </header>
      <InputOTPForm />
    </div>
  );
}
