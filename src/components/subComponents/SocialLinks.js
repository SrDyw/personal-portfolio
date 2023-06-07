import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialLinks() {
    return (
        <div className="links text-2xl text-white flex gap-8">
            <a href="https://github.com/SrDyw">
                <BsGithub></BsGithub>
            </a>
            <a href="https://www.linkedin.com/in/mdk-gd-389911276">
                <BsLinkedin></BsLinkedin>
            </a>
            <a href="https://www.facebook.com/dayniel.martinez.9">
                <BsFacebook></BsFacebook>
            </a>
        </div>
    );
}
