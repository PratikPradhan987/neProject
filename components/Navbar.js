import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
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
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
    </nav>
  );
};

export default Navbar;
