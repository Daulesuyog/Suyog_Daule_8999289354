import { useApp } from "../Context/AppContext";

function Footer() {
    const {profile} = useApp();

    return(
        <footer className="footer" style={{ textAlign: "center", alignItems: "center" }}>
            <p>
                &copy;{new Date().getFullYear()} {profile.name}.
                All Right Reserved
            </p>
        </footer>
    );
}

export default Footer;