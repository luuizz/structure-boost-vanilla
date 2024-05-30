import { Inter } from "next/font/google";
import localFont from 'next/font/local'    
import './global.css';
import './app.css'
import Header from "@/components/Header/header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false
})

const satoshi = localFont({
  src: [
    {
      path: './../fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
  adjustFontFallback: false
})

export const metadata = {
  title: "Structureboost",
  description: "Projeto do curso Codeboost, utilizando a linguagem do Vanilla-extract",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${satoshi.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
