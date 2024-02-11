import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Inter, Pinyon_Script, Imperial_Script } from "next/font/google";

const pinyon = Pinyon_Script({ weight: ["400"], subsets: ["latin"] });

const imperial = Imperial_Script({ weight: ["400"], subsets: ["latin"] });

export default function Header() {
  return (
    <header className="">
      <nav className="fixed top-0 flex justify-between w-full items-center dark:mix-blend-difference px-4 sm:px-10 pt-8 font-bold">
        <a
          href="mailto:josh@tollb.it"
          className="hover:underline hidden sm:block"
        >
          Contact
        </a>
        <div className="text-2xl space-x-6">
          <Link
            href="/"
            className="sm:hover:bg-gray-100 sm:hover:dark:bg-gray-900 sm:px-4 py-4 rounded-lg transition ease-in-out"
          >
            {" "}
            <span className={`${imperial.className} text-5xl`}>why</span>
            .tollbit.com
          </Link>
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
