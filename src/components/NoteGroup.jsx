import React, { useState } from "react";

import "../index.css";
import styles from "./noteGroup.module.css";

const NoteGroup = ({note = []}) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(null);

  const handleGroupClick = (index) => {
    setActiveGroupIndex(index);
  };
  return (
    <div className={styles.groupContainer}>
      {note.map((note, index) => (
        <div
          key={index}
          className={`${styles.noteGroup} ${
            activeGroupIndex === index ? styles.active : ""
          }`}
          onClick={() => handleGroupClick(index)}
        >
          <div
            className={styles.noteShortForm}
            style={{ backgroundColor: note.color }}
          >
            {note.shortForm}
          </div>
          <span className={styles.noteName}>{note.noteName}</span>
        </div>
      ))}
    </div>
  );
};

export default NoteGroup;
