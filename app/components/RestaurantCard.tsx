import React from "react";
import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/nobu-jardins-sao-paulo">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/1/25924907.jpg"
          alt=""
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">Nobu Jardins São Paulo</h3>
          <div className="flex items-start">
            <div className="flex mb-2">★★★★☆</div>
            <p className="ml-2">30 Reviews</p>
          </div>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className="mr-3">Japanese</p>
          <p className="mr-3">$$$$</p>
          <p>Sao Paulo</p>
        </div>
        <p className="text-sm mt-1 font-bold">Booked 0 times today</p>
      </Link>
    </div>
  );
}
