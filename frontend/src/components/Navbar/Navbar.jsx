import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import ThemeButton from '../ThemeToggleButton/ThemeToggleButton';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Function to smoothly scroll to a section
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className={styles.container}>
            <nav className={`${styles.nav} ${showNav ? styles.visible : styles.hidden}`}>
                <img src="/images/avatar.png" alt="avatar" className={styles.avatar} />
                <div className={styles.name}>Adarsh Yadav</div>
                <ul className={styles.navigationButton}>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('about')}>About Me</li>
                    <li onClick={() => scrollToSection('skills')}>Skills</li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('contact')}>Contact Me</li>
                    <ThemeButton />
                </ul>
            </nav>
            <div className={`${styles.falseNav} ${showNav ? styles.visible : styles.hidden}`}></div>
        </div>
    );
};

export default Navbar;
