import React from "react";
import { text_main_color } from "../../libs/system";
import { BsLink, BsUnity } from "react-icons/bs";

export default function ProjectFragment({ title = 'Card Name', info, image, url, icons}) {
    
    return (
        <a
            href={url}
            target="_blank"
            className="_project_frag relative grid grid-rows-[1fr,_0.5fr] w-[250px] h-[350px] bg-black rounded-xl p-2"
        >
            <div className="overflow-hidden rounded-xl">
                <img className="object-cover w-full" src={image} alt="" />
            </div>
            <div className="_project_info flex flex-col">
                <h2 className="text-2xl _gradient_text text-center font-bold">{title}</h2>
                <p className={`text-lg text-center font-semibold ${text_main_color}`}>
                    {info}
                </p>
            </div>
            <div className="relative _project_icons text-white font-bold text-xl bg-[#4c004e] rounded-xl _gradient_background p-2 flex-center gap-4">
                {
                    icons.map((e, i) => (
                        e === 'unity' ? <BsUnity className="inline-block" key={i}/> : 
                        e === 'csharp' ? <h2 className="inline-block" key={i}>c#</h2> : 
                        e === 'html' ? <h2 className="inline-block" key={i}>html</h2> : 
                        e === 'js' ? <h2 className="inline-block" key={i}>js</h2> : 
                        e === 'css' ? <h2 className="inline-block" key={i}>css</h2> : 
                        e === 'react' ? <h2 className="inline-block" key={i}>react</h2> : ''
                    ))
                }
            </div>
        </a>
    );
}
