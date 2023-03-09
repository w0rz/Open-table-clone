import { PrismaClient } from "@prisma/client";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

const prisma = new PrismaClient();

interface RestarauntTypes {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;

}

const fetchRestaurantBySlug = async (slug: string): Promise<RestarauntTypes> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true
    }
  });
  // Fix it later
  if (!restaurant) {
    throw new Error;
  }
  return restaurant;
}
export default async function RestaurantDetails({ params }: { params: { slug: string } }) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  console.log({ restaurant });
  return (
    <>
      <div className="bg-white w-[70%] p-3 shadow rounded">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Gallery images={restaurant.images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
