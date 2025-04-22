import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a23] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
