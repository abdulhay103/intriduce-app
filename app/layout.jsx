import "./globals.css";
import Footer from "./src/utils/Footer";
import Header from "./src/utils/Header";

export const metadata = {
  title: "Intriduce Next",
  description: "Learn with OSTAD team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white">
        <div className=" bg-gradient-to-br from-green-50 via-orange-50 to-sky-100 w-full min-h-screen">
          <Header />
          <div className=" container mx-auto py-20"> {children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
