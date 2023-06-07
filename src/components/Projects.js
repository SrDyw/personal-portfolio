import React, { useContext, useEffect, useState } from "react";
import { text_main_color } from "../libs/system";
import { AppContext } from "./AppContext";
import { getText } from "../libs/pageText";
import ProjectFragment from "./subComponents/ProjectFragment";

import ImgHonsume from "../assets/honosume.jpg";
import ImgCurr from "../assets/curr.png";
import ImgDywUni from "../assets/dyw_uni.jpg";
import ImgPortfolio from "../assets/portfolio.jpg";
import ImgMkWeb from "../assets/mk_web.jpg";


import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import SectionEnum from "./subComponents/SectionEnum";
import { BsUnity } from "react-icons/bs";

export default function Projects() {
    const { len } = useContext(AppContext);
    const proj_col_style = `_proj_col  flex flex-col gap-14 max-lg:m-4`;
    return (
        <section
            id="projects"
            className="flex flex-col items-center bg-black relative"
        >
            <SectionEnum num={3} />
            <h2 className="relative _underline _gradient_text text-5xl mt-14 font-bold">
                {len === "es" ? "Proyectos" : "Projects"}
            </h2>
            <div className="relative _project_container max-w-[1000px] w-full flex justify-between container max-lg:flex-wrap max-lg:gap-14 max-lg:justify-center ">
                <div className="_proj_middle_deco absolute w-8 h-full top-0 right-1/2 translate-x-1/2"></div>
                <div className={proj_col_style}>
                    <motion.div
                        className=""
                        variants={fadeIn("up")}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
                    >
                        <ProjectFragment
                            image={ImgHonsume}
                            title="Honsume, La Leyenda"
                            url={"https://srdyw.itch.io/la-leyenda-de-honosume"}
                            info={getText('Honosume', len)}
                            icons={["unity", "csharp"]}
                        />
                    </motion.div>
                    <motion.div
                        className=""
                        variants={fadeIn("up")}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
                    >
                        <ProjectFragment
                            image={ImgDywUni}
                            url={"https://srdyw.github.io/dyw-universe/"}
                            title="Dyw Universe"
                            info={getText('DywUni', len)}
                            icons={["html", "js", "css"]}
                        />
                    </motion.div>
                </div>
                <div className={proj_col_style}>
                    <motion.div
                        className=""
                        variants={fadeIn("up")}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
                    >
                        <ProjectFragment
                            image={ImgPortfolio}
                            url={"https://srdyw.github.io/personal-portfolio/"}
                            title="Portfolio Personal"
                            info={getText('PersonalPort', len)}
                            icons={["html", "js", "css", "react"]}
                        />
                    </motion.div>
                    <motion.div
                        className=""
                        variants={fadeIn("up")}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
                    >
                        <ProjectFragment
                            image={ImgCurr}
                            url={"https://srdyw.github.io/dayniel-cv/"}
                            title="Curriculo Personal"
                            info={getText('PersonalPort', len)}
                            icons={["html", "js", "css", "react"]}
                        />
                    </motion.div>
                    <motion.div
                        className=""
                        variants={fadeIn("up")}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}
                    >
                        <ProjectFragment
                            image={ImgMkWeb}
                            url={"https://srdyw.github.io/mk-web/"}
                            title="Mirkastillito Web"
                            info={getText('Mirkastillito', len)}
                            icons={["html", "js", "css"]}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
