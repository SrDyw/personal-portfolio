import React, { useContext, useEffect } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { getText } from "../libs/pageText";
import { AppContext } from "./AppContext";

const Banner = () => {
    const { len } = useContext(AppContext);
    let array_anim = [
        "Web Full Stack",
        2000,
        getText("App", len),
        2000,
        getText("Games", len),
        2000,
    ];

    return (
        <section
            className="flex justify-center items-center overflow-hidden relative"
            id="home"
        >
            {/* <motion.div
                className="example"
                variants={fadeIn("up")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
            ></motion.div> */}
            <div className="_background w-full h-full absolute lg:left-[-150px] left-0 top-0 bg-image"></div>

            <motion.div
                className="_banner_info container w-full h-full flex justify-end items-center"
                variants={fadeIn("up")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
            >
                <div className="text-white font-extrabold flex flex-col items-center lg:items-end gap-5 relative">
                    <h2 className="text-xl">{getText("Hello", len)}</h2>
                    <h1 className="text-4xl lg:text-7xl">
                        {getText("Programmer", len)}
                    </h1>
                    <div className="text-3xl lg:text-4xl text-amber-400">
                        <TypeAnimation
                            sequence={array_anim}
                            repeat={Infinity}
                            wrapper="span"
                        />
                    </div>
                    <p className="text-center lg:text-end mt-4 max-w-[500px]">
                        {getText("WelcomeInfo", len)}
                    </p>
                    <div className="buttons_content flex justify-center lg:justify-end w-full">
                        <a
                            href="https://srdyw.github.io/dayniel-cv/"
                            target="_blank"
                            className="_button mr-10"
                        >
                            {getText("BtnCV", len)}
                        </a>
                        <a href="#about" className="_button">
                            {getText("BtnExp", len)}
                        </a>
                    </div>

                    {/* BACKGROUND DECORATION */}
                    <div className="w-[1200px] h-[1200px] bg-rose-300 absolute right-0 top-[0] translate-y-[-50%] translate-x-[50%] rounded-full blur-3xl opacity-[0.02] -z-50"></div>
                    <div className="w-[2000px] h-[2000px] bg-rose-700 absolute right-0 top-[0] translate-y-[-50%]  translate-x-[50%] rounded-full blur-3xl opacity-[0.05] -z-50"></div>
                    {/* BACKGROUND DECORATION */}
                </div>
            </motion.div>

            <div className="_lenguages hidden lg:grid grid-cols-3 absolute left-10 top-[55%] translate-y-[-50%] w-[500px] h-[500px] text-8xl">
                <motion.div
                    className="_leng_col2 flex flex-col items-center gap-10 relative"
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored"></i>
                </motion.div>
                <motion.div
                    className="_leng_col2 flex flex-col items-center gap-10 relative top-10 text-white"
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <i class="devicon-csharp-plain colored"></i>
                    <i class="devicon-tailwindcss-plain colored"></i>
                    <i class="devicon-java-plain-wordmark colored"></i>
                </motion.div>
                <motion.div
                    className="_leng_col2 flex flex-col items-center gap-10 relative top-20"
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <i class="devicon-nodejs-plain-wordmark colored"></i>

                    <i class="devicon-react-original-wordmark colored"></i>

                    <svg viewBox="0 0 128 128">
                        <path
                            d="M38.527 77.594l-8.32-13.398 8.32-13.41 4.012 13.41zm-18.516-1.305l-10.453-9.93h16.637l8.32 13.402zm0-24.238l14.465-3.473-8.32 13.41H9.516zM41.258 42l-18.902 4.699-2.812 4.621-5.676-.043L0 64.195l13.867 12.914 5.676-.043 2.813 4.617 18.902 4.742 5.078-17.617-2.859-4.574 2.859-4.578zM84.18 55.039c-2.516 0-4.223 1.02-5.504 2.902h-.082v-2.414h-4.437v17.734h4.52V63.207c0-2.406 1.582-4.086 3.758-4.086 2.047 0 3.582 1.188 3.582 3.273v10.91h4.523V61.699c.043-3.883-2.52-6.66-6.359-6.66zM67.285 65.781c0 2.375-1.406 4.008-3.711 4.008-2.09 0-3.414-1.145-3.414-3.223V55.527h-4.523v11.852c0 3.883 2.305 6.418 6.441 6.418 2.605 0 4.055-.941 5.293-2.578h.129v2.086h4.352V55.527h-4.523v10.254zm25.688-10.254h4.52v17.734h-4.52zm0-5.516h4.52v3.555h-4.52zm30.164 5.516l-2.687 8.012c-.598 1.633-1.066 3.883-1.066 3.883h-.129l-1.195-3.883-3.031-8.012h-4.863l4.992 12.629c1.066 2.699 1.41 3.84 1.41 4.82 0 1.473-.812 2.414-2.73 2.414h-1.75v3.719h2.902c3.754 0 5.074-1.43 6.484-5.355L128 55.57h-4.863zm-17.195 12.547v-9.402h2.902V55.57h-2.902v-5.559h-4.523v5.516H98.86v3.105h2.559v10.422c0 3.348 2.645 4.25 5.035 4.25l2.477-.082v-3.434h-1.152c-1.066.039-1.836-.406-1.836-1.715zm0 0"
                            fill="#ffffff"
                        ></path>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
