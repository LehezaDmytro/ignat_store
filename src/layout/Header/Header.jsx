import NavMenu from "../../components/NavMenu/NavMenu";
import SearchBar from "../../components/SearchBar/SearchBar";

import navItems from "../../db/navItems.json";
import styles from "./Header.module.scss";

import heartIcon from "../../assets/icons/heart.svg";
import bagIcon from "../../assets/icons/bag.svg";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={styles.phoneHelpGroup}>
            <a href="tel:+380989000909">098 900 09 09</a>
            <a href="#exemple">Допомога</a>
          </div>
          <div className={styles.singinLoginGroup}>
            <a href="#exemple">Увійти</a>
            <span>/</span>
            <a href="#exemple">Зареєструватися</a>
          </div>
        </div>
      </div>
      <div className={styles.headerMain}>
        <div className="container">
          <a className={styles.logo} href="#header">
            ignat
          </a>
          <NavMenu items={navItems} />
          <div className={styles.searchBarGroup}>
            <SearchBar />
            <a href="#exemple">
              <img src={heartIcon} alt="heart icon" />
            </a>
            <a href="#exemple">
              <img src={bagIcon} alt="bag icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
