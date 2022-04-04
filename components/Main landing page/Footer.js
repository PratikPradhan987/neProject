import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="
        bg-white
             text-3xl text-white text-center
             border-t-4 
             fixed
             inset-x-0
             bottom-0
             p-4 rounded-b-lg" 
      >
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://nedevelopers.in/" className="hover:underline">
            Content Owned, Updated and Maintained by NE Developers. Copyright ©
            2022. All Rights Reserved
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
