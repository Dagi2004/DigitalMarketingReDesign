import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Button } from "./Button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-10 w-full flex items-center justify-center gap-[150px] px-6 md:px-16 py-4  text-black">
      {/* Logo and Title */}
      <NavLink to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Dagmaros Logo" className="w-9 h-9" />
        <h1 className="text-[40px] leading-10 font-medium  text-foundationblack">
          Dagmaros
        </h1>
      </NavLink>

      <ul className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-[15px] cursor-pointer transition-all duration-300 hover:opacity-100 opacity-80 ${
                  isActive ? "active" : " "
                }`
              }
              end={item.path === "/"}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <Button />
      </div>

      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="md:hidden text-black text-xl"
      >
        ☰
      </button>

      {isOpen && (
        <div
          className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 
                 text-foundation bg-foundationblack opacity-75 text-white
              p-12 md:hidden"
        >
          <ul className="flex flex-col gap-8 mx-auto">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-[15px] cursor-pointer transition-all duration-300 hover:opacity-100 opacity-80 ${
                      isActive ? "active" : " "
                    }`
                  }
                  end={item.path === "/"}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <Button />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
