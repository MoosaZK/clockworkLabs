import { Poppins } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
function Layout({ children }) {
  return (
    <>
      <Header fontFamily={poppins.className} />
      <main className={poppins.className}>{children}</main>
      <Footer ontFamily={poppins.className}/>
    </>
  );
}

export default Layout;
