import styles from './title.module.scss'

const index = () => {
  return (
    <div className={styles.start}>
      
      <div className={styles.title}>
        <h1>Workforce Survey</h1>
        <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
      </p> 
      <button>Start Now</button>
      </div>
    </div>
  );
}

export default index;
