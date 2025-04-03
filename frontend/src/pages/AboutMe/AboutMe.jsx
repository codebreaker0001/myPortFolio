import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={`heading`}>
                About Me
            </div>
            <div className={styles.about}>
                <p>I&apos;m Adarsh, a full-stack web developer and competitive programmer with a knack for turning complex problems into elegant solutions. As a pre-final student at IIT Roorkee, I blend my technical prowess with a dash of humor and a lot of coffee.</p>
                <p>When I&apos;m not busy debugging code or competing in programming contests, you can find me brainstorming the next big thing in tech. My journey in web development has been a rollercoaster of learning and innovation, and I thrive on the thrill of creating seamless, user-friendly applications.</p>
                <p>Whether it&apos;s crafting robust backend systems or designing sleek, responsive frontends, I bring intelligence and professionalism to every project. But don&apos;t let the seriousness fool you—I believe that a good laugh is the best way to solve any problem.</p>
                <p>Let&apos;s build something amazing together, and remember, in the world of code, anything is possible!</p>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;