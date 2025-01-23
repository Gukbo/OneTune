import styles from "../components/home.module.css";
import home_img from "../../public/home_image.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.homeDiv}>
      <div className={styles.imgDiv}>
        <img
          className={styles.homeImg}
          src={home_img}
          alt="home_img"
          width={600}
          height={400}
        />
        <h1 className={styles.homeH1}>"One Tune" 에서 애창곡을 기록하세요.</h1>
        <button className={styles.startBtn}>
          <Link
            to="/playList"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            저장
          </Link>
        </button>
      </div>
    </div>
  );
}
