import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-[#EEEEEE] mt-10 border-t-2 border-gray-600">
      <h1 className="text-center mt-1">
        ©{" "}
        <Link
          href="http://aritra.design"
          className="hover:text-[#d4aa9c] duration-300"
          target="_blank"
        >
          aritra.design
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
