export default function EmailRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-center flex flex-col justify-center items-center h-dvh">
      {children}
    </main>
  );
}
