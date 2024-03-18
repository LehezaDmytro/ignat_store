import styles from "./NavMenu.module.scss";

const NavMenu = ({ items }) => {
  return (
    <>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.text} className={styles.item}>
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
