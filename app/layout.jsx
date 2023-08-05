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
        <div className=" bg-gradient-to-br from-green-50 via-orange-50 to-sky-100 w-full h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
