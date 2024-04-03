import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INTRAG d.o.o.",
  description: "INTRAG d.o.o. - Vaša stamparija visoke kvalitete za sve potrebe printanja. Specijalizirani smo za printanje na različite materijale, pružamo usluge grafičkog dizajna, graviranja, te izradu personaliziranih poklona, vizit kartica, kataloga i mnogo više. Uvjerite se u našu kvalitetu.",
  icons: {
    icon:[
      '/favicon.ico?v=4'
    ],
    apple:[
      '/apple-touch-icon.png?v=4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <ContactUs />
        <Footer />
        </body>
    </html>
  );
}
