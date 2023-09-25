import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-white sticky top-0 shadow-md z-50">
      <nav className="flex items-center py-5 px-4 justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="text-xl text-black">
          <Image src="/logo.svg" alt="Nandeesh Pandey" width={30} height={30} />
        </Link>
        <ul>
          <li>
            <Link
              href="/contact"
              className="py-2 px-3 bg-white rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white"
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
