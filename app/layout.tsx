import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TSFA - Email Signatures",
  description: "A form to create email signatures for TSFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center font-quicksand">
        {children}
      </body>
    </html>
  );
}
