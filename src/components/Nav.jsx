import styles from "./nav.module.css";
import logo from "../../public/OneTuneLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [islogin, setIsLogin] = useState("true");
  const [loginState, setLoginState] = useState("로그인");

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src={logo} alt="logo" width={240} height={100} />
        </Link>
      </div>
      <div className={styles.navLog}>
        <button className={styles.logBtn}>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {loginState}
          </Link>
        </button>
      </div>
    </div>
  );
}
