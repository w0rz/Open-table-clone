import { PrismaClient } from "@prisma/client";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      items: true
    }
  })
  if (!restaurant) {
    throw new Error
  }
  return restaurant.items
}
export default async function RestaurantMenuPage({ params }: { params: { slug: string } }) {
  const items = await fetchRestaurantMenu(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] p-3 shadow rounded">
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={items} />
      </div>
    </>
  );
}
