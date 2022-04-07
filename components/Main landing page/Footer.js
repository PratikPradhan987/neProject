import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex flex-row title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="w-10 h-10 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
            ></img>
            <span className="ml-3 text-xl">Tours</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 All Rights Reserved.
            <a
              href="https://nedevelopers.in/"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Content Owned, Updated and Maintained by NE Developers. Copyright
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
