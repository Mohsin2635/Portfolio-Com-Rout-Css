import image1 from "../../../../public/20241101_181708.png";
import Image from "next/image";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_contant}>
        <p className={styles.pera}>UI/UX Designer</p>
        <h1 className={styles.heading1}>
          Hi, i'm <span>Mohsin</span>,<br /> Ali From Pakistan, <br />A FullStack <span>Web-Developer.</span>
        </h1>
      </div>
      <Image
        src={image1}
        alt="Image"
        className={styles.Image}
      ></Image>
    </div>
  );
};

export default Home;
