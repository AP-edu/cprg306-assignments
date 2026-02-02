import Link from "next/link";

export function GlobalHeader() {
  return (
    <header>
      <nav className="">
        <Link href="/" className=" hover:underline">
          Site LOGO
        </Link>
        <Link
          href="https://v2.tailwindcss.com/docs"
          className=" hover:underline"
        >
          {" "}
          TailWinds Docs
        </Link>
      </nav>
    </header>
  );
}
