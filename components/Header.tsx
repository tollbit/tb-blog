import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <nav className="fixed top-0 py-8 flex justify-between w-full items-center px-4 sm:px-10 font-bold z-30">
        <Link href="/" className="underline hidden sm:block">
          Homes
        </Link>
        <Link href={"/"}>
          <Image src={"/whytollbit.png"} alt={""} width={200} height={50} />
        </Link>
        <a href="mailto:team@tollbit.com" className="underline sm:mt-0 mt-3">
          Contact
        </a>
      </nav>
    </header>
  );
}
