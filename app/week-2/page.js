import Link from "next/link";
import StudentInfo from "./studentInfo";
import { GlobalHeader } from "../components/GlobalHeader";

export default function Page() {
  return (
    <main>
      <GlobalHeader />
      <h1 className="text-2xl font-bold">Shopping List</h1>

      <h1 className="button-hover:blue">Student Information</h1>
      <StudentInfo />
    </main>
  );
}
