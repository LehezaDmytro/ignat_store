//Import components
import NavMenu from "../../components/NavMenu/NavMenu";

//Import data
import navItems from "../../db/navItems.json";

//import icons
import instagtam from "../../assets/icons/instagram.svg";
import viber from "../../assets/icons/viber.svg";
import telegram from "../../assets/icons/telegram.svg";

//Import styles
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.contacts}>
            <div className={styles.workingHoursAndPhone}>
              <h4>Контакт - центр</h4>
              <ul>
                <li>098 900 09 09</li>
                <li>Пн - Пт 09:00 - 21:00</li>
                <li>Пн - Пт 09:00 - 21:00</li>
              </ul>
            </div>
            <div className={styles.socialLinks}>
              <a href="#exemple">
                <img src={instagtam} alt="instagtam" />
              </a>
              <a href="#exemple">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="#exemple">
                <img src={viber} alt="viber" />
              </a>
            </div>
          </div>
          <div className={styles.siteMap}>
            <div>
              <h4>Покупцям</h4>
              <ul>
                <li>
                  <a href="#exemple">Оплата і доставка</a>
                </li>
                <li>
                  <a href="#exemple">Повернення</a>
                </li>
                <li>
                  <a href="#exemple">Питання та відповіді</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Особистий кабінет</h4>
              <ul>
                <li>
                  <a href="#exemple">Мої дані</a>
                </li>
                <li>
                  <a href="#exemple">Історія замовлень</a>
                </li>
                <li>
                  <a href="#exemple">Улюблені</a>
                </li>
                <li>
                  <a href="#exemple">Розсилки</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Про компанію</h4>
              <ul>
                <li>
                  <a href="#exemple">Про нас</a>
                </li>
                <li>
                  <a href="#exemple">Новини</a>
                </li>
                <li>
                  <a href="#exemple">Стати партнером</a>
                </li>
                <li>
                  <a href="#exemple">Угода користувача</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <NavMenu items={navItems} />
          <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
