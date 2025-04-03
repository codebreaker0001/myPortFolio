import styles from './Portrait.module.css';

const Portrait = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.avatar}></div> */}
      <img src="/images/portrait.png" alt="" className={styles.portrait}/>
    </div>
  );
};

export default Portrait;