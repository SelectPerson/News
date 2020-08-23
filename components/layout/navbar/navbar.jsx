import Logo from '../img/logo.png'
import styles from '../layout.module.scss' 

import ConfigMenu from './config-menu' // Конфигурация меню
import NavBarMenu from './navbar-menu'

const Navbar = () => {

  const getElemMenu = ConfigMenu.map(elem => <NavBarMenu title={elem.title} href={elem.href} key={elem.id} />)
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo"/>
      </div>
      <ul className={styles.list}>
        {getElemMenu}
      </ul> 
    </nav>
  )
}



export default Navbar 