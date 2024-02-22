import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full px-4 z-30 sm:px-10 py-4 sm:py-8 tracking-tighter backdrop-blur-sm bg-white/40 sm:backdrop-blur-none sm:bg-transparent">
      <nav className="text-sm flex justify-between space-x-6 font-bold">
        <div className="">
          <h3 className="">Novoscribe, Inc. © 2024.</h3>
        </div>
        <div className="space-x-6 underline">
          <Link href="https://tollbit.com">tollbit.com</Link>
          {/* <Link href="https://x.com/tollbit_">X</Link> */}
          {/* <Link href="https://github.com/">GitHub</Link> */}
          <Link href="https://www.linkedin.com/company/tollbit/">LinkedIn</Link>
        </div>
      </nav>
    </footer>
  );
}
