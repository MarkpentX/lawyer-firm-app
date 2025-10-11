import justiceIcon from '../../public/imgs/justice.png'
import scalesIcon from '../../public/imgs/scales.png'
import shieldIcon from '../../public/imgs/shield.svg'
import medalIcon from '../../public/imgs/medal.svg'
import graphIcon from '../../public/imgs/graph.svg'
import documentIcon from '../../public/imgs/document.svg'
import folderIcon from '../../public/imgs/folder.svg'
import searchIcon from '../../public/imgs/search.svg'
import courtIcon from '../../public/imgs/court.jpg'
import handshakeIcon from '../../public/imgs/handshake.png'
import gmailIcon from '../../public/imgs/gmail.svg'
import internetIcon from '../../public/imgs/internet.svg'
import ReviewItem from "../components/ReviewItem.jsx";
import AchievementsItem from "../components/AchievementsItem.jsx";
import SchemaItem from "../components/SchemaItem.jsx";
import DetailsItem from "../components/DetailsItem.jsx";
import classes from './Main.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            description: form.message.value
        };

        try {
            const response = await axios.post('you-url', formData, {
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
            });
            if (response.status === 200) {
                navigate('/success'); // переход без перезагрузки
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Ошибка при отправке формы. Попробуйте позже.');
        }
    }

    const reviews = [
        {
            title: "Я потерял 35 000 € в криптопроекте. FinGuard помог вернуть активы.",
            name: "Виктор К.",
            jobTitle: "Инвестор",
            result: "Возвращено: 35 000 €"
        },
        {
            title: "Фальшивый проект забрал 25 000 $. Команда вернула всё официальным путём.",
            name: "Анна Т.",
            jobTitle: "Юрист",
            result: "Возвращено: 25 000 $"
        },
        {
            title: "Не надеялся вернуть 50 000 € после конфликта с партнёром. Результат превзошёл ожидания.",
            name: "Максим Р.",
            jobTitle: "Предприниматель",
            result: "Возвращено: 50 000 €"
        },
        {
            title: "20 000 $ ушли через фишинговый сайт. FinGuard помог не только вернуть, но и наказать организаторов.",
            name: "Елена П.",
            jobTitle: "Бухгалтер",
            result: "Возвращено: 20 000 $"
        }
    ];

    const stats = [
        {
            number: "20+",
            title: "лет опыта",
            description: "Реальные кейсы и работа с международными структурами"
        },
        {
            number: "500+",
            title: "успешных дел",
            description: "Возврат активов через официальные механизмы"
        },
        {
            number: "90%",
            title: "результативности",
            description: "Большинство клиентов получают компенсацию частично или полностью"
        }
    ];

    const steps = [
        {
            icon: documentIcon,
            iconTitle: "document-icon",
            number: "01",
            title: "Подача заявки",
            description: "Заполните короткую форму и опишите проблему. Мы связываемся с вами в течение дня.",
            action: "Подать заявку →"
        },
        {
            icon: folderIcon,
            iconTitle: "folder-icon",
            number: "02",
            title: "Анализ ситуации",
            description: "Юристы и аналитики изучают документы, переписку и транзакции, чтобы выстроить стратегию.",
            action: "Начать анализ →"
        },
        {
            icon: searchIcon,
            iconTitle: "search-icon",
            number: "03",
            title: "Подготовка документов",
            description: "Собираем пакет доказательств и формируем официальные обращения в нужные инстанции.",
            action: "Собрать документы →"
        }
    ];

    const faq = [
        {
            title: "Как проходит возврат?",
            description: "Мы собираем документы, фиксируем нарушения и подаём обращения в официальные органы. Процесс полностью легальный и прозрачный."
        },
        {
            title: "Каковы шансы?",
            description: "В среднем до 85% — зависит от ситуации и качества доказательств. Мы проводим бесплатный анализ и честно оцениваем перспективы."
        },
        {
            title: "Что нужно для старта?",
            description: "Договор, переписка, скриншоты переводов и любые подтверждающие материалы. Чем больше документов, тем выше шансы на успех."
        },
        {
            title: "Сколько времени занимает процесс?",
            description: "В среднем от 2 до 6 месяцев, в зависимости от сложности дела и юрисдикции. Мы держим вас в курсе на каждом этапе."
        },
        {
            title: "Работаете ли вы с международными делами?",
            description: "Да, наша команда специализируется на международных финансовых спорах и имеет опыт работы с различными юрисдикциями."
        }
    ];


    return (
        <main>

            <section className={classes.heroContainer}>
                <h1>Возвращаем Активы Через <b>Официальные</b> Процедуры</h1>
                <p>Команда специалистов по международному праву и финансовым спорам помогает вернуть средства от
                    недобросовестных брокеров и платформ.</p>

                <nav>
                    <button onClick={() => document.getElementById('form').scrollIntoView({ behavior: 'smooth' })}>Начать возврат  ⭢</button>
                    <button onClick={() => document.getElementById('info').scrollIntoView({ behavior: 'smooth' })}>Узнать больше</button>
                </nav>

                <dl>
                    <dt>20+</dt>
                    <dd>лет опыта</dd>

                    <dt>500+</dt>
                    <dd>решённых кейсов</dd>
                </dl>

                <img src={justiceIcon} alt="justice-icon"/>
            </section>

            <div className={classes.whiteContainer}>
            <section id="info" className={classes.aboutContainer}>
                <small>20 лет защиты интересов клиентов</small>

                <h2>FinGuard — это сервис, который объединяет юристов и финансовых экспертов</h2>
                <p>Мы работаем по прозрачной схеме и сопровождаем клиента на каждом этапе процесса. Наша команда
                    специализируется на решении сложных дел и возврате средств через официальные каналы.</p>

                <dl>
                    <dt>500+</dt>
                    <dd>решённых кейсов</dd>

                    <dt>90%</dt>
                    <dd>результативности</dd>
                </dl>

                <img src={scalesIcon} alt="scales-icon"/>

                <ul>
                    <li>
                        <img src={shieldIcon} alt="shield-icon"/>
                        <h3>Официальные процедуры</h3>
                        <p>Работаем только через легальные каналы и официальные инстанции</p>
                    </li>

                    <li>
                        <img src={medalIcon} alt="medal-icon"/>
                        <h3>Опытные специалисты</h3>
                        <p>Команда юристов с 20+ летним опытом в международном праве</p>
                    </li>

                    <li>
                        <img src={graphIcon} alt="graph-icon"/>
                        <h3>Высокая результативность</h3>
                        <p>90% клиентов получают компенсацию частично или полностью</p>
                    </li>
                </ul>
            </section>
            </div>

            <div className={classes.beigeContainer}>
                <section className={classes.stagesContainer}>
                    <h2>Как проходит возврат</h2>
                    <p>Прозрачная схема работы на каждом этапе процесса</p>

                    <ol>
                        {steps.map(item => (
                            <SchemaItem icon={item.icon} iconTitle={item.iconTitle} number={item.number} title={item.title}
                                        description={item.description} action={item.action}/>
                        ))}
                    </ol>

                    <div className={classes.consultationContainer}>
                        <img src={courtIcon} alt="court-img"/>
                        <h2>Начните процесс возврата сегодня</h2>
                        <p>Первая консультация полностью бесплатна. Мы оценим вашу ситуацию и предложим оптимальную стратегию
                            возврата средств.</p>
                        <button onClick={() => document.getElementById('form').scrollIntoView({ behavior: 'smooth' })} >Получить консультацию →</button>
                    </div>
                    </section>
            </div>

            <section id="experience" className={classes.statsContainer}>
                <h2>Наши показатели</h2>
                <p>Цифры, которые говорят о нашей эффективности</p>

                <ul>
                    {stats.map(item => (
                        <AchievementsItem number={item.number} title={item.title} description={item.description}/>
                    ))}
                </ul>
            </section>

            <div className={classes.whiteContainer}>
                <section id="review" className={classes.reviewContainer}>
                    <h2>Истории клиентов</h2>
                    <p>Реальные отзывы людей, которым мы помогли вернуть средства</p>

                    <ul>
                        {reviews.map(item => (
                            <ReviewItem title={item.title} name={item.name} jobTitle={item.jobTitle} result={item.result}/>
                        ))}
                    </ul>
                </section>
            </div>

            <div className={classes.beigeContainer}>
                <section id="details" className={classes.detailsContainer}>
                    <h2>Частые вопросы</h2>
                    <p>Ответы на самые популярные вопросы о процессе возврата</p>

                    {faq.map(item => (
                        <DetailsItem title={item.title} name={item.name} description={item.description}/>
                    ))}
                </section>
            </div>

            <div className={classes.whiteContainer}>
                <section className={classes.formContainer}>
                    <h2>Связаться с нами</h2>
                    <strong>Возврат потерянных средств</strong>
                    <p>Оставьте заявку, чтобы получить бесплатную консультацию.</p>
                    <img src={handshakeIcon} alt="handelshake-icon"/>

                    <ul>
                        <li>
                            <img src={gmailIcon} alt="gmail-icon"/>
                            <a href="mailto:LegalFuturesLawyer@outlook.com"
                               aria-label="Send email to LegalFuturesLawyer@outlook.com">LegalFuturesLawyer@outlook.com</a>
                        </li>

                        <li>
                            <img src={internetIcon} alt="internet-icon"/>
                            Онлайн-сервис, работаем с делами любой сложности
                        </li>
                    </ul>

                    <form id="form" action="/submit" method="post" onSubmit={handleSubmit}>
                        <fieldset>

                            <label htmlFor="name">Ваше имя</label>
                            <input type="text" id="name" name="name" placeholder="Введите ваше имя" required/>

                            <label htmlFor="phone">Телефон</label>
                            <input type="tel" id="phone" name="phone" placeholder="+380 __ ___ __ __"
                                   pattern="\+380[0-9]{9}" required/>

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="your@email.com" required/>

                            <label htmlFor="message">Опишите вашу ситуацию</label>
                            <textarea id="message" name="message" placeholder="Расскажите о проблеме..." rows="4"
                                      required></textarea>

                            <button type="submit">Отправить заявку</button>
                        </fieldset>
                    </form>

                </section>
            </div>
        </main>
    );
}

export default Main;