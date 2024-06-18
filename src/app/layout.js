import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INT",
  description: "Interactive Number Theory Playground",
};

// Navbar
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <nav>
          <Nav />
        </nav>
      </body>
    </html>
  );
}
