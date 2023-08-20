// "use client";
// import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
          {/* <ProgressBar
            height="3px"
            color="#F97316"
            options={{ showSpinner: false }}
            shallowRouting
          /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
