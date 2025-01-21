import styles from "../components/login.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const navigatePlaylist = () => {
    navigate("/Playlist");
  };
  return (
    <div className={styles.loginDiv}>
      <div className={styles.loginForm}>
        <h1 className={styles.loginH1}>LOGIN</h1>
        <div className={styles.IdForm}>
          <span className={styles.loginSpan}>ID </span>
          <input
            className={styles.loginInput}
            type="text"
            value="아이디를 입력하세요"
          />
        </div>
        <div className={styles.PwForm}>
          <span className={styles.loginSpan}>PW</span>
          <input
            className={styles.loginInput}
            type="text"
            value="비밀번호를 입력하세요"
            maxLength={24}
          />
        </div>
        <div>
          <button onClick={navigatePlaylist}>로그인</button>
        </div>
      </div>
    </div>
  );
}
