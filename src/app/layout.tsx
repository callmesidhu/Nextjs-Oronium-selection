import "../app/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Beyond UI Blog",
  description: "Modern UI/UX Blog built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-7xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
