import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-slate-800 text-white h-14 flex justify-evenly items-center p-4 w-screen">
        <div className="logo ">
          <img
            src="/logo-transparent-png.png"
            alt="logo"
            width={150}
          />
        </div>
        <ol>
          <li className="text-[#E6F7FF] hover:text-[#00BFFF] flex justify-center items-center gap-1">
            <lord-icon
              src="https://cdn.lordicon.com/lllcnxva.json"
              trigger="in"
              delay="700"
              state="in-reveal"
              style={{ width: 40, height: 40 }}
            ></lord-icon>
            <a target="_blank" href="https://github.com/MaheshJV9130/keynest">
              GitHub
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
