import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="/">
          <h1 className="text-4xl font-semibold">
            Md. Johurul Islam
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/*  mobile nav */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
