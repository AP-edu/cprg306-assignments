import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function Page() {
  return (
    <main>
      <header>
        <h1>Shopping List</h1>
        <Link href="/">Back To HomePage</Link>
      </header>

      <h1 className="button-hover:blue">Student Information</h1>
      <StudentInfo />
    </main>
  );
}
