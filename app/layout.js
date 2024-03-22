import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intrag d.o.o.",
  description: "Intrag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}</body>
    </html>
  );
}
