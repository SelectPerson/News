import Navbar from './navbar/navbar'
import NavbarMobile from './navbar/navbar-mobile'
import Footer from './footer'

import styles from './layout.module.scss' 

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <NavbarMobile />
          <Navbar />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout 