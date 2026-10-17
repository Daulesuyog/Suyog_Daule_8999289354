import {createContext, useState, useEffect, useContext} from "react";
import * as data from "../App_State.jsx";

const AppContext = createContext(null);
 
export function AppProvider ({children}){
    const [theme, setTheme] = useState("light");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect (() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const value = {
        ...data,
        theme,
        toggleTheme,
        menuOpen,
        toggleMenu,
        closeMenu,
    };

    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}                           
export const useApp = () => useContext(AppContext);