import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <nav className="fixed top-0 pt-8 flex justify-between w-full items-center dark:mix-blend-difference px-4 sm:px-10 font-bold z-30">
        <Link href="/" className=" underline ">
          why.tollbit.com
        </Link>
        <a href="mailto:josh@tollb.it" className="underline">
          Contact
        </a>
      </nav>
    </header>
  );
}
