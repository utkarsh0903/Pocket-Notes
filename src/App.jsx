import { useState } from "react";

import { dashboardBackground, lock } from "./data/data.jsx";

import "./index.css";
import styles from "./app.module.css";

function App() {
  const [note, setNote] = useState({
    noteName: "",
    shortForm: "",
    colour: "",
    details: "",
    submitDate: "",
    submitTime: "",
  });

  return (
    <div className={styles.dashboard}>
      <div className={styles.notesGroupSection}>
        <h2>Pocket Notes</h2>
        <button className={styles.createGroupButton}>+</button>
      </div>
      <div className={styles.notesDetailSection}>
        <div className={styles.dashboardContent}>
          <img
            className={styles.bannerImage}
            src={dashboardBackground}
            alt="Dashboard Background"
          />
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
        <div className={styles.dashboardFooter}>
          <img className={styles.encryptedLock} src={lock} alt="Lock Icon" />
          <p>end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
}

export default App;