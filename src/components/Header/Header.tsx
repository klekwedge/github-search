import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import classes from './Header.module.scss';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        devfinder
      </div>
      <ThemeSwitcher />
    </div>
  )
}

export default Header;