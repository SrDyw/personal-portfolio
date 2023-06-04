import React, { useContext, useState } from "react";

import { IoIosSettings } from "react-icons/io";
import { AppContext } from "./AppContext";

export default function Settings() {
    const [active, setActive] = useState("");
    const {setLen, len} = useContext(AppContext);

    const handleEvent = (e) => {
        setActive(active !== "" ? "" : "active");
    };

    const changeLengHander = () => {    
        setLen(len === 'es' ? 'en' : 'es');
    }

    return (
        <>
            <div className={`_settings_body ${active}`}>
                <div className="_sett_len text-xl text-white cursor-pointer" onClick={changeLengHander}>{len}</div>
            </div>
            <div className={`_settings ${active}`} onClick={handleEvent}>
                <IoIosSettings />
            </div>
        </>
    );
}
