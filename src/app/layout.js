import "@/public/styles/reset.css";
import "@/public/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
