import { useTheme } from '../../context/ThemeProvider';
import styles from './Skills.module.css';

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <h2 className={styles.heading}>My Skills</h2>

      {/* Programming Languages */}
      <div className={styles.skillsSection}>
        <h3 className={styles.sectionTitle}>💻 Computer Languages</h3>
        <div className={styles.skillsList}>
          <span className={styles.skill}>C++</span>
          <span className={styles.skill}>JavaScript</span>
          <span className={styles.skill}>SQL</span>
          <span className={styles.skill}>HTML</span>
          <span className={styles.skill}>CSS</span>
        </div>
      </div>

      {/* Software Packages */}
      <div className={styles.skillsSection}>
        <h3 className={styles.sectionTitle}>🛠 Software Packages</h3>
        <div className={styles.skillsList}>
          <span className={styles.skill}>GitHub</span>
          <span className={styles.skill}>React.js</span>
          <span className={styles.skill}>Redux.js</span>
          <span className={styles.skill}>Node.js</span>
          <span className={styles.skill}>MongoDB</span>
        </div>
      </div>

      {/* Languages Known */}
      <div className={styles.skillsSection}>
        <h3 className={styles.sectionTitle}>🌍 Languages Known</h3>
        <div className={styles.skillsList}>
          <span className={styles.skill}>English (SRW)</span>
          <span className={styles.skill}>Hindi (SRW)</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
