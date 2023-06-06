import React from "react";

export default function SectionEnum({ num }) {
    return <div className="z-50 _section_emun absolute top-0  left-[50%] translate-x-[-50%]  -translate-y-1/2 w-20 h-20 bg-black rounded-full flex-center">
        <h2 className="_gradient_text text-center text-2xl font-extrabold">{num}</h2>
        <div></div>
    </div>; 
}
