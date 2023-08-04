import "./globals.css";
import Header from "./src/utils/Header";

export const metadata = {
  title: "Intriduce Next",
  description: "Learn with OSTAD team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
