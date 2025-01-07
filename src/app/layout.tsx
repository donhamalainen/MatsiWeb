import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ChillaxMedium = localFont({
  src: "../../public/fonts/Chillax-Medium.woff2",
  display: "swap",
  variable: "--chillax-medium",
});
const ChillaxSemibold = localFont({
  src: "../../public/fonts/Chillax-Semibold.woff2",
  display: "swap",
  variable: "--chillax-semibold",
});
const GeneralSansRegular = localFont({
  src: "../../public/fonts/GeneralSans-Regular.woff2",
  display: "swap",
  variable: "--generalsans-regular",
});
const GeneralSansMedium = localFont({
  src: "../../public/fonts/GeneralSans-Medium.woff2",
  display: "swap",
  variable: "--generalsans-medium",
});
const GeneralSansSemibold = localFont({
  src: "../../public/fonts/GeneralSans-Semibold.woff2",
  display: "swap",
  variable: "--generalsans-semibold",
});

export const metadata: Metadata = {
  title: "Matsi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ChillaxMedium.variable} ${ChillaxSemibold.variable} ${GeneralSansSemibold.variable} ${GeneralSansMedium.variable} ${GeneralSansRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
