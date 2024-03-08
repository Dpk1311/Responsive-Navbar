import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex justify-evenly items-center m-3 p-1 md:m-5 md:p-3 bg-blue-500">
        <div className="z-20 flex  items-center">
          <h1 className="md:text-2xl uppercase ">SimpleNav</h1>
          <div className="md-hidden absolute right-7">
            <FaAlignJustify className="m-2 md:hidden" onClick={clickHandler} />
          </div>
        </div>

        <ul className="flex md:text-xl">
          <li className="hidden md:block mx-5 ">Home</li>
          <li className="hidden md:block mx-5 ">About</li>
          <li className="hidden md:block mx-5">Contact Us</li>
        </ul>

        <ul
          className={`text-left md:text-xl md:hidden bg-blue-400 top-0 fixed w-full py-24 pl-4 bottom-0 overflow-y-auto duration-500 ${isOpen ? "left-0" : "left-[-100%]"}`}
        >
          <li className="mx-5">Home</li>
          <li className="mx-5">About</li>
          <li className="mx-5">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
