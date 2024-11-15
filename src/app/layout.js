import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Game Library",
  description: "Game Library Manager with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header/>
          <Navbar/>
          {children}

        </Providers>
       
      </body>
    </html>
  );
}
 