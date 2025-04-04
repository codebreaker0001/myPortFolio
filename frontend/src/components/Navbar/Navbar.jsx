import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Menu, X, Sun, Moon } from "lucide-react"; // Icons for Menu & Theme
import ThemeButton from "../ThemeToggleButton/ThemeToggleButton";

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        const handleScroll = () => {
            setShowNav(window.scrollY <= lastScrollY || window.scrollY < 100);
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Scroll to Section & Close Menu
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    // Toggle Dark Mode
    const toggleTheme = () => {
        const newTheme = darkMode ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, []);

    return (
        <div className={styles.container}>
            <nav className={`${styles.nav} ${showNav ? styles.visible : styles.hidden}`}>
                <div className={styles.navContent}>
                    <img src="/images/avatar.png" alt="avatar" className={styles.avatar} />
                    <div className={styles.name}>Adarsh Yadav</div>

                    {/* Desktop Navigation */}
                    <ul className={`${styles.navigationButton} ${menuOpen ? styles.showMenu : ""}`}>
                        <li onClick={() => scrollToSection("home")}>Home</li>
                        <li onClick={() => scrollToSection("about")}>About Me</li>
                        <li onClick={() => scrollToSection("skills")}>Skills</li>
                        <li onClick={() => scrollToSection("projects")}>Projects</li>
                        <li onClick={() => scrollToSection("contact")}>Contact Me</li>
                        <button className={styles.themeToggle} onClick={toggleTheme}>
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </nav>
            <div className={`${styles.falseNav} ${showNav ? styles.visible : styles.hidden}`}></div>
        </div>
    );
};

export default Navbar;
