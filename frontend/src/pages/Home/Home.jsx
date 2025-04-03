import Button from '../../components/Button/Button';
import Portrait from '../../components/Portrait/Portrait';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.portrait}><Portrait/></div>
        <div className={styles.content}>
            <div className={styles.title}>
                <p style={{color: "var(--accent-color)"}}>Hi! I&#39;m</p>
                <p  style={{color: "var(--primary-color)"}}>Adarsh Yadav</p>
            </div>
            <div className={styles.desc}>
                <p>A Full stack web developer and</p>
                <p>Competitive Programmer</p>
                <p>Based in India</p>
            </div>
            <a href="/resume.pdf" className={styles.buttonContainer}><Button title={"Resume"}/></a>
        </div>
      
    </div>
  );
};

export default Home;