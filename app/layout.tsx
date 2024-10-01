import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import { Provider } from "./Provider";

const monserrat = Montserrat({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Soundboard DND",
  description: "Soundboard para el dyd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${monserrat.className}  antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="px-8 max-sm:px-4">{children}</main>
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  );
}
