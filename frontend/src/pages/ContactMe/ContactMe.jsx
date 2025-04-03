import { useTheme } from '../../context/ThemeProvider';
import styles from './ContactMe.module.css';

const ContactMe = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <h2 className={styles.heading}>Contact Me</h2>
      
      {/* Contact Section */}
      <div className={styles.contactInfo}>
        <p className={styles.text}>Feel free to reach out to me via email:</p>
        <a href="mailto:yashyadav0171@gmail.com" className={styles.emailButton}>
          📩 Contact via Gmail
        </a>
      </div>

      {/* Google Map */}
      <div className={styles.mapContainer}>
        <iframe
          title="My Location"
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.460419927224!2d77.89242617530261!3d30.273627574872415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb38b3f0ccf5d%3A0xf7d5e8b7854a8a82!2sIndian%20Institute%20of%20Technology%20Roorkee!5e0!3m2!1sen!2sin!4v1711983747982!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMe;
