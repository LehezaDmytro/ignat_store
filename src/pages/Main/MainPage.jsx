import sliderImg1 from "../../assets/images/HomePage/Slider Image1.jpg";
import sliderImg2 from "../../assets/images/HomePage/Slider Image2.jpg";
import sliderImg3 from "../../assets/images/HomePage/Slider Image3.jpg";
import giftsImg from "../../assets/images/HomePage/gifts img.jpg";

import styles from "./MainPage.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const MainPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="heroSwiper"
        >
          <SwiperSlide>
            <a href="#exemple">
              <img src={sliderImg1} alt="slider img" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#exemple">
              <img src={sliderImg2} alt="slider img" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#exemple">
              <img src={sliderImg3} alt="slider img" />
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.gifts}>
        <div className="container">
          <div className={styles.giftsGroup}>
            <h2>Ми знаємо, що сподобається вашим “великим” друзям!</h2>
            <h3>
              Обирай подарунок своїм друзями бодібілдерам із нашою новою
              колекцію термобілизни “Big warm”
            </h3>
            <a href="#exemple">До каталогу</a>
          </div>
          <img className={styles.giftsImg} src={giftsImg} alt="gifts img" />
        </div>
      </section>
      <section className={styles.promotions}>
        <div className="container">
          <h2>Спіймай всі акції!</h2>
          <h3>
            Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
            будуть з`влятись у нашому магазині. А у нас їх багато :D
          </h3>
          <div className={styles.inputButnGroup}>
            <input type="text" placeholder="ВВЕДІТЬ" />
            <button type="submit">Підписатись</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
