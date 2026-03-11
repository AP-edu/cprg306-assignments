import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const PageHeaderData = {
    title: "",
    description: "",
  };
  return (
    <div>
      <main>
        <header className="text-lg justify-self-auto">
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
        </header>
        <Link href="/week-2">
          <h2> Go to Week 2</h2>
        </Link>
        <Link href="/week-3">
          <h2> Go to Week 3</h2>
        </Link>
        <Link href="/week-4" className="hover:underline">
          <h2>Go to week 4</h2>
        </Link>
      </main>
    </div>
  );
}
