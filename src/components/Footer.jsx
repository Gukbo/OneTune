import styles from "./footer.module.css";
import { useState } from "react";
import githubIcon from "../assets/github.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footerDiv}>
      <span className={styles.footerSpan}>
        Copyright 2025. Gukbo all rights reserved
      </span>
      <div>
        <Link to="https://github.com/Gukbo" target="_blank">
          <img src={githubIcon} alt="githubicon" />
        </Link>
      </div>
    </div>
  );
}
