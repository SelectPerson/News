import styles from './layout.module.scss'

import Facebook from './img/social/facebook.png'
import Twitter from './img/social/twitter.png'
import Linkedin from './img/social/linkedin.png'

const FooterLayout = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.innerFooter}>
        <div className={styles.title}>
          <p>Ukraine 2000-2015</p>
        </div>
        <div className={styles.icon}>
        <img src={Facebook} alt="facebook" />
        <img src={Twitter} alt="twitter" />
        <img src={Linkedin} alt="linkedin" />
        </div>
      </div>
      
    </div>
  )
}

export default FooterLayout