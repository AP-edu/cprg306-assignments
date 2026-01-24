import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <div>
        <h2>Name: Alexander Pacunayen</h2>
        <br />
      </div>
      <div>
        <h2> My GitHub Link:</h2>
      </div>
      <Link
        href="https://github.com/AP-edu/cprg306-assignments"
        className="text-white hover:underline"
      >
        {" "}
        https://github.com/AP-edu/cprg306-assignments
      </Link>
    </main>
  );
}
