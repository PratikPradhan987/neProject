import React from "react";
import Link from "next/link";
import Serviceprovided from "../components/Seller/Serviceprovided";

const seller = () => {
  return (
    <>
      {/* <div className="mt-24 shadow-sm">
        <div className="w-full">
          <img
            className="sm:w-full m-0 object-center sm:h-96"
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          />
          <h2 className="sm:top-0 sm:right-9 sm:absolute rounded-lg text-black shadow-black shadow-blue-50 text-center sm:text-8xl text-4xl font-medium">
            Seller Panel
          </h2>
        </div>
      </div> */}

      <Serviceprovided />

      <div className="grid justify-items-end mx-16 ">
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-12">
          Click on join as seller to Host your ads
        </h2>
        <Link href="/Sellermain">
          <button className="border-black border-2  bg-pink-50 h-14 rounded-full w-32">
            <h2 className="text-center font-bold">Join as a seller</h2>
          </button>
        </Link>
      </div>
      <footer className="flex-shrink-0  mt-2 border-t-2 border-black">
        <Link href="/">
          <h2 className="h-16 w-full flex justify-center py-2 px-4 font-medium  text-white bg-pink-600 hover:bg-pink-700">
            Go Back to Home Page
          </h2>
        </Link>
      </footer>
    </>
  );
};

export default seller;
