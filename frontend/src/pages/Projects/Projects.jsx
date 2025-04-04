import { useTheme } from '../../context/ThemeProvider';
import styles from './Projects.module.css';

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        <div className={`${styles.projectCard} ${darkMode ? styles.darkCard : styles.lightCard}`}>
          <img src="/images/picture1.jpg" alt="Project 1" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Social Media App</h3>
          <p className={styles.projectDescription}>A Social Media app built with React and NodesJs.</p>
          <a href="https://github.com/codebreaker0001/GenzAdda" target="_blank" className={styles.projectLink}>View Project</a>
        </div>

        <div className={`${styles.projectCard} ${darkMode ? styles.darkCard : styles.lightCard}`}>
          <img src="/images/lab1.jpg" alt="Project 2" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Smart Lab Report</h3>
          <p className={styles.projectDescription}>A platform for lab reports automation.</p>
          <a href="https://github.com/codebreaker0001/iLab" target="_blank" className={styles.projectLink}>View Project</a>
        </div>

        <div className={`${styles.projectCard} ${darkMode ? styles.darkCard : styles.lightCard}`}>
          <img src="/images/webAnnotator.png" alt="Project 3" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Web-Annotator</h3>
          <p className={styles.projectDescription}>A web annotation tool for higlighting text on websites.</p>
          <a href="https://github.com/codebreaker0001/WebAnnotator" target="_blank" className={styles.projectLink}>View Project</a>
        </div>

        <div className={`${styles.projectCard} ${darkMode ? styles.darkCard : styles.lightCard}`}>
          <img src="/images/shell.jpg" alt="Project 4" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>C++ Shell</h3>
          <p className={styles.projectDescription}>A simple C++-based shell.</p>
          <a href="https://github.com/codebreaker0001/simple_shell-in-cpp" target="_blank" className={styles.projectLink}>View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
