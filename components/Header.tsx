import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Inter, Pinyon_Script, Imperial_Script } from "next/font/google";
import Image from "next/image";

const pinyon = Pinyon_Script({ weight: ["400"], subsets: ["latin"] });

const imperial = Imperial_Script({ weight: ["400"], subsets: ["latin"] });

export default function Header() {
  return (
    <header className="">
      <nav className="fixed top-0 pt-8 flex justify-between w-full items-center dark:mix-blend-difference px-4 sm:px-10 font-bold">
        <div className="flex space-x-12">
          <a href="mailto:josh@tollb.it" className="underline">
            Contact
          </a>
          <Link
            href="/"
            className=" font-extrabold rounded-lg transition ease-in-out underline "
          >
            Home
          </Link>
        </div>
        <div className="text-2xl">
          {/* <Link
            href="/"
            className="sm:px-4 font-mono font-extrabold rounded-lg transition ease-in-out hover:underline sm:-ml-12"
          >
            Why Tollbit
          </Link> */}
        </div>
        {/* <Link href="/posts">Notes</Link> */}
        {/* <Link href="/about">About</Link> */}
        <div className="">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
