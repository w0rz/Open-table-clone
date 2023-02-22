import NavBar from "@/app/components/NavBar"
import Description from "./components/Description"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Rating from "./components/Rating"
import ReservationCard from "./components/ReservationCard"
import RestaurantNavBar from "./components/RestaurantNavBar"
import Reviews from "./components/Reviews"
import Title from "./components/Title"

export default function RestaurantDetails(){
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar /> 
       <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
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
        </div>
      </main>
    </main>
  )
}

