import { InputOTPForm } from "@/components/input-otp-form";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full max-w-lg m-auto gap-8">
      <header className="flex flex-col gap-2 text-start">
        <TypographyH2>Verifique seu email</TypographyH2>
        <TypographyP>
          Enviamos um código de verificação para o seu endereço de email. Por
          favor, digite o código abaixo para verificar seu email.
        </TypographyP>
      </header>
      <InputOTPForm />
    </div>
  );
}
