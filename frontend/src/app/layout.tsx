import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduFinance - Login",
  description: "Acesse sua conta no sistema EduFinance.",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     // O suppressHydrationWarning evita avisos no console quando o script do modo escuro injeta a classe 'dark' no HTML
//     <html lang="pt-BR" suppressHydrationWarning>
//       <body className="antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }