import React from "react";
import { text_main_color } from "../../libs/system";

export default function SkillFragment({
    s_name,
    s_value,
}) {
    const secondary_color = '#ff2cc0';
    const text_color = 'text-[#fff]';
    const degress = 360 * s_value;
    const style = {
        background: `conic-gradient(${secondary_color} ${degress}deg, #00000000 0deg)`,
    };

    return (
        <div className="text-[#ff2cc0] _skill_card relative w-[170px] flex flex-col gap-10 justify-evenly items-center bg-[#000] m-4 py-5 rounded-lg overflow-hidden">
            <h2 className={`text-2xl font-extrabold ${text_color} z-20`}>
                {s_name}
            </h2>
            <div
                className="_bar relative h-[120px] w-[120px] rounded-full flex-center z-10"
                style={style}
            >
                <h2 className={`text-2xl font-bold ${text_color} z-20`}>
                    {Math.floor(s_value * 100)}%
                </h2>
            </div>
        </div>
    );
}
