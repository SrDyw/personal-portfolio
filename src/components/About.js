import React, { useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/dayniel.png";
import { text_main_color } from "../libs/system";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { getText } from "../libs/pageText";
import { AppContext } from "./AppContext";
import SectionEnum from "./subComponents/SectionEnum";
import SocialLinks from "./subComponents/SocialLinks";

export default function About() {
    const {len} = useContext(AppContext)
    return (
        <section className="_about grid relative bg-black" id="about">
            <SectionEnum num={1}/>
            <div className="flex justify-center top-[-20px] items-center relative lg:left-[-40px] lg:top-0 ">
                <motion.div
                    className="flex-center flex-col gap-5 absolute w-full mt-14 h-[300px] lg:w-[400px] lg:h-[400px]"
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0}}
                >
                    <img className="w-[95%] max-w-[300px] z-[2]" src={Image} alt="" />
                    <SocialLinks/>
                    {/* <div className="_image_profile_deco skew-y-6 lg:skew-y-0 absolute w-full h-full left-0 top-0 bg-[#0b020e] z-[1]">
                    </div> */}
                </motion.div>
            </div>

            <motion.div
                className={`_description flex flex-col mt-5 gap-5 lg:justify-center lg:max-w-[700px] ${text_main_color}`}
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="_gradient_text _underline text-5xl font-extrabold absolute top-[100px] hidden lg:inline-block">
                    Sobre Mi
                </h2>
                <h2 className=" text-4xl text-center flex flex-col lg:inline-block">
                    {len === 'es' ? "Soy" : "I am "}
                    <span className="font-extrabold max-w-[412px]">
                        Dayniel Martinez Rodriguez
                    </span>
                </h2>
                <div className="container text-xl text-justify flex flex-col gap-5">
                    <p>
                        {getText("AboutMe", len)}
                    </p>
                </div>
            </motion.div>

            <div className="z-10 _split_effect absolute w-full h-20 bg-black bottom-0 left-0 skew-y-3 translate-y-1/2" >

            </div>
        </section>
    );
}

// flex _image_content absolute w-[200px] h-[200px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-[400px] lg:h-[400px] lg:skew-x-6 bg-white lg:right-0 lg:left-0 lg:translate-x-[30%]
