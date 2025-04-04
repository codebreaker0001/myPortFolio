import React, { useState } from 'react';
import AboutMe from '../../pages/AboutMe/AboutMe';
import ContactMe from '../../pages/ContactMe/ContactMe';
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import Skills from '../../pages/Skills/Skills';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';
import Chatbot from "../ChatBot/ChatBot";

const Layout = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Floating Chat Button & Chatbot */}
      <div className={styles.chatContainer}>
        <button onClick={() => setShowChat(!showChat)} className={styles.chatToggle}>
          💬 Chat
        </button>
        {showChat && <Chatbot />}
      </div>

      <div className={styles.scrollContainer}>
        <section id="home" className={styles.section}>
          <Home />
        </section>
        <section id="about" className={styles.section}>
          <AboutMe />
        </section>
        <section id="skills" className={styles.section}>
          <Skills />
        </section>
        <section id="projects" className={styles.section}>
          <Projects />
        </section>
        <section id="contact" className={styles.section}>
          <ContactMe />
        </section>
      </div>
    </div>
  );
};

export default Layout;
