import { useRef } from "react";
import CeralistLogo from "./CeralistLogo";
import NavItem from "./NavItem";

const Navbar = () => {
    const menuref = useRef(null);
    return (
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
            <div className="flex flex-row items-center cursor-default">
                <CeralistLogo imgSize="w-12" />
                <span className="text-3xl">Ceralist</span>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => menuref.current.classList.toggle("hidden")}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>

            <div
                className="hidden w-full md:flex md:items-center md:w-auto"
                id="menu"
                ref={menuref}
            >
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                    <NavItem itemName="Home" hrefTo={"#home-container"} />
                    <NavItem itemName="Products" hrefTo={"#products"} />
                    <NavItem itemName="Contact" hrefTo={"#contact"} />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;