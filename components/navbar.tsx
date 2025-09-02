import siteMetadata from "@/data/siteMetadata";
import { nav } from "@/data/nav";
import Link from "next/link";
import MobileNav from "./mobileNav";

const Navbar = () => {
  let headerClass =
    "flex justify-center w-screen justify-between py-4 px-2 lg:py-8 lg:px-32";
  if (siteMetadata.stickyNav) {
    headerClass += " sticky top-0 z-50";
  }

  return (
    <nav className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle} >
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Link
              className="flex items-center font-semibold text-xl"
              href="/"
              legacyBehavior
              passHref
            >
              <h1 className="text-black font-semibold">MIRAII<span className="text-orange-500">.PLAY</span></h1>
            </Link>
          </div>
          {typeof siteMetadata.headerTitle === "string" ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {nav.map((link) => (
            <Link
              key={link.title}
              href={link.links}
              className="text-black hover:text-orange-500 font-medium m-1 transition transform duration-300 hover:scale-110 "
            >
              {link.title}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
