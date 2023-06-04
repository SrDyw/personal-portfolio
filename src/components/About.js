import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/dayniel.png";
import { text_main_color } from "../libs/system";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function About() {
    return (
        <section className="_about grid relative bg-black" id="about">
            <div className="_image_profile_deco skew-y-6 flex justify-center top-[-20px] items-center  bg-[#0b020e] relative lg:left-[-40px] lg:top-0 lg:skew-y-0"></div>
            <motion.div
                className="flex-center flex-col gap-5 absolute w-full mt-14 h-[300px] lg:w-[400px] lg:h-[400px]"
                variants={fadeIn("up")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
            >
                <img className="w-[95%] max-w-[300px]" src={Image} alt="" />
                <div className="links text-2xl text-white flex gap-6">
                    <a href="">
                        <BsGithub></BsGithub>
                    </a>
                    <a href="">
                        <BsLinkedin></BsLinkedin>
                    </a>
                    <a href="">
                        <BsFacebook></BsFacebook>
                    </a>
                </div>
            </motion.div>
            <motion.div
                className={`_description flex flex-col gap-5 lg:justify-center lg:max-w-[700px] ${text_main_color}`}
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="_underline text-5xl font-extrabold absolute top-[100px] hidden lg:inline-block">Sobre Mi</h2>
                <h2 className=" text-4xl text-center flex flex-col lg:inline-block">
                    Soy{" "}
                    <span className="font-extrabold max-w-[412px]">
                        Dayniel Martinez Rodriguez
                    </span>
                </h2>
                <div className="container text-xl text-justify flex flex-col gap-5">
                    <p>
                        Ejerzo como programador desde finales de 2019 con varios
                        proyectos desarrollados. Actualemnte me encuentro
                        estudiando en La Universidad de Ciencias Informáticas de
                        Cuba para una formación más completa y profesional como
                        ingeniero informático.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

// flex _image_content absolute w-[200px] h-[200px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-[400px] lg:h-[400px] lg:skew-x-6 bg-white lg:right-0 lg:left-0 lg:translate-x-[30%]
