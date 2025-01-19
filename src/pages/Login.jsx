import styles from "../components/login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.loginDiv}>
      <div className={styles.loginForm}>
        <h1 className={styles.loginH1}>로그인 페이지</h1>
      </div>
    </div>
  );
}
