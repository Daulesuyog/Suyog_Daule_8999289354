import {useApp} from "../Context/AppContext.jsx";

function Navbar () {
const {
    profile,
    navlinks,
    theme,
    toggleTheme,
    menuOpen,
    toggleMenu,
    closeMenu
} = useApp();

return(
    <header className="navbar">
        <div className="container nav-inner">
            <a href= "#top" className="logo">Suyog Raosaheb Daule</a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {navlinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
                    {link.label}</a>
            ))}

            <a className="btn btn-small" href={profile.resume} download>
                Resume
            </a>
        </nav>

        <div className="nav-actions">
            <button className="icon-btn"onClick={toggleTheme} aria-label="Switch theme">
                {theme === "light" ? "dark" : "light"}
            </button>

            <button className="icon-btn menu-btn" onClick={toggleMenu} aria-label="Open menu">
                {menuOpen ? "Close" : "Menu"}
            </button>
        </div>
        </div>
    </header>
)
};
export default Navbar;