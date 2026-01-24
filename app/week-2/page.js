import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function Page() {
  return (
    <main>
      <header className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Shopping List</h1>
        <Link href="/" className="text-blue-600  hover:underline">
          Back To HomePage
        </Link>
      </header>

      <h1 className="button-hover:blue">Student Information</h1>
      <StudentInfo />
    </main>
  );
}
