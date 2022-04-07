import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* <nav className="shadow-sm flex items-center justify-between flex-wrap  p-6">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
      <Link href="/">
        <a>
          <img className="mr-3 h-9 sm:h-12"
            src="https://sntonline.sikkim.gov.in/NewAssets/img/logo.png"
            alt="Flowbite Logo"
            // width={500}
            // height={500}
          />
        </a>
        </Link>

        {/* <div className="hidden w-full md:block md:w-auto" id="mobile-menu"> */}
      {/* <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <Link href="/tour">
            <a>
              <li className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Tour
              </li>
            </a>
          </Link>
          <Link href="/bike">
            <a>
              <li className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Bike
              </li>
            </a>
          </Link>
          <Link href="/cab">
            <a>
              <li className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Cab
              </li>
            </a>
          </Link>
          <Link href="/user_login">
            <a>
              <li className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                User Login
              </li>
            </a>
          </Link>
        </ul>
      </div>
      {/* </div> */}
      {/* </nav> */}

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                src="https://sntonline.sikkim.gov.in/NewAssets/img/logo.png"
                className="w-10 h-10 rounded-full"
              />
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              <span className="font-bold ml-3 text-xl">Coder Works</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/tour">
              <a className="mr-5 hover:text-gray-900">Tour</a>
            </Link>
            <Link href="/bike">
              <a className="mr-5 hover:text-gray-900">Bike</a>
            </Link>
            <Link href="/cab">
              <a className="mr-5 hover:text-gray-900">Cab</a>
            </Link>
            <Link href="/other">
              <a className="mr-5 hover:text-gray-900">Others</a>
            </Link>            
            <Link href="/user_login">
              <a><img
                src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102647.png?token=exp=1649259483~hmac=7a6122ead442e69b23dc2de015180321"
                className="mr-5 w-8 h-8 rounded-full"
              /></a>
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
