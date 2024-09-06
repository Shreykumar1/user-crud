import React from "react";

const Header: React.FC = () => {
  return (
    <header className=" py-4 lg:py-6 shadow-lg w-full fixed top-0 z-50 bg-sky-200">
      <nav className="container px-4 lg:px-10 flex justify-between items-center">
        <a
          href={"/"}
          className="font-semibold text-lg lg:text-2xl font-plusJakartaSans text-blue-950"
        >
          User CRUD
        </a>
        <div>
          <a href = "/" className="text-black mr-4">Home</a>
          <a href="/about" className="text-black">About</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
