import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="fixed bottom-0 w-full px-4 sm:px-10 pb-8 dark:mix-blend-difference font-bold tracking-tighter">
        <nav className="text-sm flex justify-between space-x-6">
          <div className="">
            <h3 className="">Tollbit, 2024.</h3>
          </div>
          <div className="space-x-6 underline">
            <Link href="https://x.com/jooshmayer">X</Link>
            <Link href="https://github.com/joshmayerr">GitHub</Link>
            <Link href="https://linkedin.com/in/jooshmayer">LinkedIn</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
