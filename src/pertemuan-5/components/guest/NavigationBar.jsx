import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 font-semibold
    ${isActive
      ? "font-extrabold text-hijau "
      : "text-gray-600 hover:text-hijau hover:font-extrabold"}`;

  return (
    <div>
      <nav className="bg-white border-gray-200 border-b-2 w-full fixed top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="font-poppins-extrabold text-[27px] text-gray-900">
            Sedap <b className="text-hijau">.</b>
          </span>

          {/* Tombol hamburger muncul mulai md ke bawah */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>

          {/* Menu: tampil dropdown mulai md ke bawah */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:bg-white md:border-0">
              <li>
                <NavLink id="menu-1" to="/" className={menuClass} onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink id="menu-2" to="/aboutus" className={menuClass} onClick={() => setIsOpen(false)}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink id="menu-3" to="/produk" className={menuClass} onClick={() => setIsOpen(false)}>
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink id="menu-4" to="/testimoni" className={menuClass} onClick={() => setIsOpen(false)}>
                  Testimonial
                </NavLink>
              </li>
              <li>
                <NavLink id="menu-5" to="/orders2" className={menuClass} onClick={() => setIsOpen(false)}>
                  Orders
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  id="menu-6"
                  to="/register"
                  className="inline-flex items-center px-4 py-2 mt-2 bg-hijau text-white rounded-full hover:bg-green-700 transition md:mt-0 "
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
