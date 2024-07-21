import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Portfolio",
  description: "3D Macbook Portfolio",
};
import "./global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
