import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  return (
    <ul className=" grid h-56 grid-cols-1 place-items-stretch gap-4   ">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
