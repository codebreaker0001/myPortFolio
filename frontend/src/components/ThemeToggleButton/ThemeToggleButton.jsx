import React from 'react';
import styles from './ThemeToggleButton.module.css';
import { useTheme } from '../../context/ThemeProvider';

const ThemeToggleButton = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <div className={styles.container}>
      <div className={`${styles.toggle} ${darkMode ? styles.dark : styles.light}`} onClick={toggleTheme}>
        {darkMode ? (
          <img src='/icons/moon.png' className={styles.icon} style={{filter: "invert(1)"}} alt="U" />
        ) : (
          <img src='/icons/sun.png' className={styles.icon} alt="O" />
        )}
        <div className={styles.wave}></div>
      </div>
    </div>
  );
};

export default ThemeToggleButton;