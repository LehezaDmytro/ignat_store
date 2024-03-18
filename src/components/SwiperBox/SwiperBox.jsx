//Import images
import hottestProducts1 from "../../assets/images/HomePage/Hottest_products_1.jpg";
import hottestProducts2 from "../../assets/images/HomePage/Hottest_products_2.jpg";
import hottestProducts3 from "../../assets/images/HomePage/Hottest_products_3.jpg";

//Import styles
import styles from "./SwiperBox.module.scss";
import "../../styles/_swiper.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const SwiperBox = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation, Pagination]}
        className="swiperBox"
      >
        <h3>Найгарячіші товари</h3>
        <SwiperSlide>
          <ul className={styles.swiperSlideItem}>
            <li>
              <img src={hottestProducts1} alt="hottest products" />
              <h4>Термобілизна для бодібілдерів</h4>
              <p className={styles.type}>Для чоловіків</p>
              <p className={styles.features}>2 кольори</p>
              <p className={styles.price}>4000 грн.</p>
            </li>
            <li>
              <img src={hottestProducts2} alt="hottest products" />
              <h4>Майка для бодібілдерів</h4>
              <p className={styles.type}>Для жінок</p>
              <p className={styles.features}>6 кольорів</p>
              <p className={styles.price}>1100 грн.</p>
            </li>
            <li>
              <img src={hottestProducts3} alt="hottest products" />
              <h4>Ланцюжок для бодібілдерів</h4>
              <p className={styles.type}>Для чоловіків</p>
              <p className={styles.features}>30 кг.</p>
              <p className={styles.price}>2000 грн.</p>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className={styles.swiperSlideItem}>
            <li>
              <img src={hottestProducts1} alt="hottest products" />
              <h4>Термобілизна для бодібілдерів</h4>
              <p className={styles.type}>Для чоловіків</p>
              <p className={styles.features}>2 кольори</p>
              <p className={styles.price}>4000 грн.</p>
            </li>
            <li>
              <img src={hottestProducts2} alt="hottest products" />
              <h4>Майка для бодібілдерів</h4>
              <p className={styles.type}>Для жінок</p>
              <p className={styles.features}>6 кольорів</p>
              <p className={styles.price}>1100 грн.</p>
            </li>
            <li>
              <img src={hottestProducts3} alt="hottest products" />
              <h4>Ланцюжок для бодібілдерів</h4>
              <p className={styles.type}>Для чоловіків</p>
              <p className={styles.features}>30 кг.</p>
              <p className={styles.price}>2000 грн.</p>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className={styles.swiperSlideItem}>
            <li>
              <img src={hottestProducts1} alt="hottest products" />
              <h4>Термобілизна для бодібілдерів</h4>
              <p className={styles.type}>Для чоловіків</p>
              <p className={styles.features}>2 кольори</p>
              <p className={styles.price}>4000 грн.</p>
            </li>
            <li>
              <img src={hottestProducts2} alt="hottest products" />
              <h4>Майка для бодібілдерів</h4>
              <p className={styles.type}>Для жінок</p>
              <p className={styles.features}>6 кольорів</p>
              <p className={styles.price}>1100 грн.</p>
            </li>
            <li>
              <img src={hottestProducts3} alt="hottest products" />
              <h4>Ланцюжок для бодібілдерів</h4>
              <p className={styles.type}>Для чоловіків</p>
              <p className={styles.features}>30 кг.</p>
              <p className={styles.price}>2000 грн.</p>
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBox;
