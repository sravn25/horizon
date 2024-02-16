import { useState } from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleHamburger = () => setHamburgerMenu(!hamburgerMenu);

  const menu = (dir) => {
    return (
      <nav className={`flex flex-${dir} justify-between items-center`}>
        <ul className="flex space-x-10">
          <li>
            <a href="/" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="/trauma" className="hover:text-white">
              Understanding Trauma
            </a>
          </li>
          <li>
            <a href="/healing" className="hover:text-white">
              Healing and Recovery
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-white">
              Resources and Support
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className="w-full h-32 bg-heather">
      <div className="flex justify-between">
        <div className="p-2 mx-2">
          <a href="/" className="no-underline">
            <img src={logo} className="w-12 mx-2" />
            <div className="font-serif text-2xl text-deep-forest-green">
              Horizon
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden p-5 md:flex flex-col justify-center items-center grow">
          {menu("row")}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex">
          <button onClick={toggleHamburger} className="text-black">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {hamburgerMenu ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.25 12c0-.66.56-1.25 1.25-1.25h15.5c.69 0 1.25.59 1.25 1.25s-.56 1.25-1.25 1.25h-15.5c-.69 0-1.25-.59-1.25-1.25zm0-5.25c0-.69.56-1.25 1.25-1.25h15.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-15.5c-.69 0-1.25-.56-1.25-1.25zm1.25 10.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-9.5z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 3c0 .55-.45 1-1 1h-16c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1zM21 12c0 .55-.45 1-1 1h-16c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1zM20 21c0 .55-.45 1-1 1h-15c-.55 0-1-.45-1-1s.45-1 1-1h15c.55 0 1 .45 1 1z"
                />
              )}
            </svg>
          </button>

          {hamburgerMenu && (
            <div className="absolute bg-asparagus top-20 left-0 right-0 md:hidden">
              {menu("col")}
            </div>
          )}
        </div>

        <div className="p-2 flex flex-row justify-end items-center">
          <button className="border-2 rounded-3xl border-asparagus bg-asparagus hover:bg-lime-900 text-white hover:text-celeste font-serif py-2 px-5 m-2 ">
            <a href="/resources">Get Help</a>
          </button>
          <button
            onClick={() => alert("Thank you for your kindness!")}
            className="border-2 rounded-3xl border-asparagus bg-white hover:bg-celeste text-black hover:text-deep-forest-green font-serif py-2 px-5 m-2"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
