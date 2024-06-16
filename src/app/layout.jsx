import {Providers} from "./providers";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";



export const metadata = {
  title: "PC Garrage",
  description: "Buy your own PC here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
