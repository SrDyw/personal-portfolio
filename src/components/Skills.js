import React, { useContext } from "react";
import SkillFragment from "./subComponents/SkillFragment";
import { text_main_color } from "../libs/system";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../variants";
import { AppContext } from "./AppContext";
import SectionEnum from "./subComponents/SectionEnum";
import SkillBack from "../assets/skills_back.svg";

export default function Skills() {
    const { len } = useContext(AppContext);
    return (
        <section id="skills" className="flex flex-col relative mt-8 ">
            <SectionEnum num={2} />
            <h2
                className={`mt-14 text-center text-5xl font-bold ${text_main_color}`}
            >
                <span className="_gradient_text relative _underline">
                    {len === "es" ? "Habilidades" : "My Skills"}
                </span>
            </h2>

            <div className="skill_container relative flex flex-wrap w-full mt-4 items-center justify-center mb-12 lg:grid lg:grid-cols-[1fr,_0.75fr]">
                <div className="flex flex-wrap w-full justify-center items-center lg:grid lg:grid-cols-3">
                    <motion.div
                        className="fragment"
                        variants={scale(0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <SkillFragment s_name={"Javascript"} s_value={0.6} />
                    </motion.div>
                    <motion.div
                        className="fragment"
                        variants={scale(0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <SkillFragment s_name={"HTML"} s_value={0.9} />
                    </motion.div>
                    <motion.div
                        className="fragment"
                        variants={scale(0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <SkillFragment s_name={"CSS"} s_value={0.75} />
                    </motion.div>
                    <motion.div
                        className="fragment"
                        variants={scale(0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <SkillFragment s_name={"C# & Java"} s_value={0.6} />
                    </motion.div>
                    <motion.div
                        className="fragment"
                        variants={scale(0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <SkillFragment s_name={"Unity"} s_value={0.75} />
                    </motion.div>
                    <motion.div
                        className="fragment"
                        variants={scale(0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <SkillFragment s_name={"React"} s_value={0.6} />
                    </motion.div>
                </div>
                <motion.div
                    className="_svg_skill max-lg:hidden flex-center"
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
                >
                    <img
                        src={SkillBack}
                        alt=""
                        className="w-10/12 object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
