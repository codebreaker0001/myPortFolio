import { useTheme } from '../../context/ThemeProvider';
import styles from './ContactMe.module.css';

const ContactMe = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${styles.pageContainer} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Contact Me</h2>

        {/* Contact Details */}
        <div className={styles.contactInfo}>
          <h3 className={styles.name}>Adarsh Yadav</h3>
          <p className={styles.description}>
            Chemical Engineering Student at IIT Roorkee | Web3 & AI Enthusiast
          </p>

          <div className={styles.detailsBlock}>
            <p>📧 Email: <a href="mailto:yashyadav0171@gmail.com" className={styles.link}>yashyadav0171@gmail.com</a></p>
            <p>📞 Phone: <a href="tel:+916392105203" className={styles.link}>+91 6392105203</a></p>
            <p>📍 Address: IIT Roorkee, Uttarakhand, India</p>
          </div>

          {/* Buttons Section */}
          <div className={styles.buttonContainer}>
            <a href="mailto:yashyadav0171@gmail.com" className={styles.emailButton}>
              📩 Email Me
            </a>
            <a href="https://github.com/codebreaker0001" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
              🔗 GitHub Profile
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ContactMe;
