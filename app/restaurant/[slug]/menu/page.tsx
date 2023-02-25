import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

export default function RestaurantMenuPage() {
  return (
  <>
 <div className="bg-white w-[100%] p-3 shadow rounded">
            <RestaurantNavBar />
            <Menu />
          </div>
  </>
  );
}
