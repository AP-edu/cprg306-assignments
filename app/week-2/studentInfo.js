import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <div>
        <h1>Student Name:</h1>
        <h2>Alexander Pacunayen</h2>
      </div>
      <Link href="https://github.com/AP-edu/cprg306-assignments">
        {" "}
        My GitHub Link
      </Link>
    </main>
  );
}
