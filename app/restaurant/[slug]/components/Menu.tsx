import { Items } from "@prisma/client";
import MenuCard from "./MenuCard";

export default function Menu({ menu }: { menu: Items[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <h1 className="font-bold text-4xl">Menu</h1>
      </div>
      {menu.length ? (
        <div className="flex flex-wrap justify-between">
          {menu.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-between">
          <p>This restaurant does not have a menu</p>
        </div>
      )}
    </main>
  );
}
