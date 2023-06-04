import React, { useContext } from "react";

import {
    BiBarChartAlt,
    BiUser,
} from "react-icons/bi";
import {
    BsBagFill,
    BsHouseFill,
} from "react-icons/bs";


import { AppContext } from "./AppContext";
import { getText } from "../libs/pageText";

const Nav = () => {
    const { len } = useContext(AppContext);

    return (
        <nav className="fixed w-full h-[60px] bg-[#00000049] grid grid-cols-[2fr,_1fr] z-[100] top-0 left-0">
            <div className="flex justify-start relative self-center">
                <ul className="w-full flex justify-evenly box-border">
                    <li className="nav__link_element flex justify-center">
                        <BsHouseFill className=" self-center"></BsHouseFill>
                        <a href="#home" className="">
                            {getText("Home", len)}
                        </a>
                    </li>
                    <li className="nav__link_element flex justify-center">
                        <BiUser className=" self-center"></BiUser>
                        <a href="#about" className="">
                            {getText("About", len)}
                        </a>
                    </li>
                    <li className="nav__link_element flex justify-center">
                        <BiBarChartAlt className=" self-center"></BiBarChartAlt>
                        <a href="#skills" className="">
                            {getText("Skills", len)}
                        </a>
                    </li>
                    <li className="nav__link_element flex justify-center">
                        <BsBagFill className=" self-center"></BsBagFill>
                        <a href="#project" className="">
                            {getText("Projects", len)}
                        </a>
                    </li>
                </ul>
            </div>
            <div className="logo flex justify-end items-center">
                <h2 className="text-white font-bold text-end mr-5">
                    Dayniel 2023
                </h2>
            </div>
        </nav>
    );
};

export default Nav;
