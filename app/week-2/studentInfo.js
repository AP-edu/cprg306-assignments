import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <div>
        <h2>Name: Alexander Pacunayen</h2>
      </div>
      <Link href="https://github.com/AP-edu/cprg306-assignments">
        {" "}
        My GitHub Link: https://github.com/AP-edu/cprg306-assignments
      </Link>
    </main>
  );
}
