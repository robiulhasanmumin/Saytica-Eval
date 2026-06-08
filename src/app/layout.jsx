import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saytica Eval Console",
  description: "AI Model Benchmark and Annotation Workspace",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        
  <header className="max-w-7xl mx-auto py-2">
          <Navbar 
          />
        </header>
        <main className="max-w-7xl mx-auto py-2 min-h-[calc(100vh-302px)]">
        {children}
        </main>
        <footer>
          {/* <Footer></Footer> */}
        </footer>
      </body>
     </html>
  );
}
