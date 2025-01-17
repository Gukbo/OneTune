import styles from "./nav.module.css";
import logo from "../../public/OneTuneLogo.png";
import { useState } from "react";

export default function Nav() {
  const [islogin, setIsLogin] = useState("true");
  const [loginState, setLoginState] = useState("로그인");

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo}>
        <img src={logo} alt="logo" width="240px" />
      </div>
      <div className={styles.navLog}>
        <button>{loginState}</button>
      </div>
    </div>
  );
}
