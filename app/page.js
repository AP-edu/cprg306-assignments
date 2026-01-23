import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <header>
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
          <Link href="/week-2">
            <h2> Got To Week 2</h2>
          </Link>
        </header>
      </main>
    </div>
  );
}
