import styles from "./nav.module.css";
import logo from "../../public/OneTuneLogo.png";
import { useState } from "react";

export default function Nav() {
  const [islogin, setIsLogin] = useState("true");
  const [loginState, setLoginState] = useState("로그인");

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo}>
        <img src={logo} alt="logo" width={240} height={100} />
      </div>
      <div className={styles.navLog}>
        <button className={styles.logBtn}>{loginState}</button>
      </div>
    </div>
  );
}
