import ItemList from "./item-list";
import { GlobalHeader } from "../components/GlobalHeader";

export default function Page() {
  return (
    <main className="p-8  min-h-screen">
      <GlobalHeader />
      <h1 className="p-2 text-lg justify-items-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}
