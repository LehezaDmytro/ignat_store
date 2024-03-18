import styles from "./SearchBar.module.scss";
import searchIcon from "../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <button className={styles.searchIconBtn} type="submit">
        <img src={searchIcon} alt="search icon" />
      </button>
      <input className={styles.searchInput} type="text" />
    </div>
  );
};

export default SearchBar;
