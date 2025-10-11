import classes from './Header.module.css';
import logoIcon from '../../public/imgs/logo.png';

function Header() {
    return (
        <header className={classes.headerContainer}>
            <img src={logoIcon} alt="logo-icon"/>

            <nav>
                <ul>
                    <li><a href={"#experience"}>Опыт</a></li>
                    <li><a href={"#review"}>Результат</a></li>
                    <li><a href={"#details"}>Частые вопросы</a></li>
                </ul>
            </nav>

            <button onClick={() => document.getElementById('form').scrollIntoView({ behavior: 'smooth' })}>Бесплатная Консультация</button>
        </header>
    );
}

export default Header;