export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-white rounded flex flex-col gap-2 max-w-md   place-content-center ">
      <span className="font-semibold text-black text-lg">{name}</span>
      <span className="text-med text-black">Quantity: {quantity}</span>
      <span className=" text-sm text-black font-italic">{category}</span>
    </li>
  );
}
