import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialLinks() {
    return (
        <div className="links text-2xl text-white flex gap-8">
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
    );
}
