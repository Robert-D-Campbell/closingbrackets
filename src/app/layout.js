import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterTop from "./components/FooterTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "closingbrackets",
  description: "AI Deep Search Technology Startup & Agency React Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <meta name="description" content={metadata.description} />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "osqds8c58x");
          `}
        </Script>
      </head>
      <body className={`${poppins.className} bg-b-900`}>
        <Header />
        {children}
        <FooterTop />
        <Footer />
      </body>
    </html>
  );
}
