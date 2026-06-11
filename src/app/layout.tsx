import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "MAGNA NUSANTARA — Luxury Botanical Vanilla House",
  description: "Sourced from highland farms in Sulawesi and Lombok, where volcanic soil and humid microclimate produce vanilla pods of exceptional length and vanillin concentration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Cinzel:wght@400;500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
