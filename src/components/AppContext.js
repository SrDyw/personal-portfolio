import React, { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [len, setLen] = useState('en');

    return <AppContext.Provider value={{len, setLen}}>{children}</AppContext.Provider>;
}
