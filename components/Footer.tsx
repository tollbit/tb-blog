import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="fixed bottom-0 w-full px-4 sm:px-10 pb-8 dark:mix-blend-difference font-bold tracking-tighter">
        <nav className="text-sm flex justify-between space-x-6">
          <div className="">
            <h3 className="">Novoscribe, Inc. © 2024.</h3>
          </div>
          <div className="space-x-6 underline">
            <Link href="https://tollbit.com">Tollbit.com</Link>
            <Link href="https://x.com/tollbit_">X</Link>
            {/* <Link href="https://github.com/">GitHub</Link> */}
            <Link href="https://www.linkedin.com/company/tollbit/">
              LinkedIn
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
