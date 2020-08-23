import React, { useState } from  'react'

import styles from './nav-mobile.module.scss'
import ConfigMenu from './config-menu' // Конфигурация меню
import NavBarMenu from './navbar-menu'
const NavbarMobile = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const getToggleNav = toggleNav ? '50px' : '-300px' 
  const clickNav = () => toggleNav ? setToggleNav(false) : setToggleNav(true)
  const getElemMenu = ConfigMenu.map(elem => <NavBarMenu title={elem.title} href={elem.href} key={elem.id} />)
  
  return (
    <>
    <nav className={styles.navbar} onClick={clickNav}>
      <div className={styles.line}>
        <hr/>
        <hr/>
        <hr/>
      </div>
    </nav>
    <ul className={styles.navToggle} style={{ top: getToggleNav, transition: 'top 1s ease-out'}}>
        {getElemMenu}
    </ul>
    </>
  );
}

export default NavbarMobile;
