import classes from './Footer.module.css'
import logoIcon from '../../public/imgs/logo.png';


function Footer() {
    return (
        <footer className={classes.footerContainer}>
            <img src={logoIcon} alt="logo-icon"/>
            <small>© 2025 FinGuard. Все права защищены</small>
        </footer>
    );
}

export default Footer;