import Link from 'next/link'

const NavBarMenu = (props) => {
  const { title, href, id } = props
  return (
    <li className="list-elem" key={id}>
      <Link href={href}><a>{title}</a></Link>
    </li>
  );
}

export default NavBarMenu;
