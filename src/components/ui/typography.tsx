export function TypographyH1({ children }: { children: string }) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: string }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: { children: string }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: string }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: { children: string }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyBlockquote({
  children,
}: {
  children: string;
}) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyInlineCode({
  children,
}: {
  children: string;
}) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function TypographyLarge({ children }: { children: string }) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographySmall({ children }: { children: string }) {
  return <small className="text-sm leading-none font-medium">{children}</small>;
}

export function TypographyMuted({ children }: { children: string }) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}

export function TypographyLead({ children }: { children: string }) {
  return <p className="text-muted-foreground text-xl">{children}</p>;
}
