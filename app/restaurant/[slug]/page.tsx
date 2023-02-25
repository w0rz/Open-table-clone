import Description from "./components/Description";
import Gallery from "./components/Gallery";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

export default function RestaurantDetails() {
  return (
<>
          <div className="bg-white w-[70%] p-3 shadow rounded">
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <Gallery />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
 </>
 );
}
