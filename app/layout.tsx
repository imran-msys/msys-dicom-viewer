import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Provider from "@/redux/provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Msys Dicom Viewer",
  description: "Msys Dicom Viewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-full`}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // enableSystem
            disableTransitionOnChange
          >
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Header />
                <main>{children}</main>
              </div>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
