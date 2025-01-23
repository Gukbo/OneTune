import styles from "../components/playList.module.css";

export default function PlayList() {
  return (
    <div className={styles.playlistDiv}>
      <div className={styles.addBtnDiv}>
        <button className={styles.addBtn}>음악 추가</button>
      </div>
      <div className={styles.listContainer}>음악 리스트 컨테이너</div>
    </div>
  );
}
