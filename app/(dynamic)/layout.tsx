import "@/app/globals.css";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Suspense around body blocks all streaming - dynamic content in initial HTML */}
      <Suspense fallback={<body>Loading...</body>}>
        <body>{children}</body>
      </Suspense>
    </html>
  );
}
