import React, { useState } from "react";

import styles from "./createuserModal.module.css";

const CreateUserModal = ({ closeCreateUserModal, note, setNote }) => {
  const [newGroupName, setNewGroupName] = useState("");
  const [groupShortName, setGroupShortName] = useState("");
  const [colorSelected, setColorSelected] = useState("");

  const createGroupName = (e) => {
    e.preventDefault();

    const newNote = {
      noteName: newGroupName,
      shortForm: groupShortName,
      color: colorSelected,
      details: "",
      submitDate: "",
      submitTime: "",
    };

    setNote((prevNotes) => [...prevNotes, newNote]);
    saveNote(note);
    closeCreateUserModal();
  };

  const saveNote = (note) => {
    localStorage.setItem("note", JSON.stringify(note));
  }

  const handleNameChange = (e) => {
    const groupName = e.target.value;
    setNewGroupName(groupName);

    const name = groupName.trim().split(" ");

    const shortName =
      name.length >= 2
        ? name[0][0].toUpperCase() + name[1][0].toUpperCase()
        : name[0]?.[0]?.toUpperCase();
    setGroupShortName(shortName);
  };

  const handleSelectedColor = (color) => {
    setColorSelected(color);
  };

  const isButtonDisabled = newGroupName.trim() !== "" && colorSelected !== "";

  return (
    <div className={styles.modalOverlay} onClick={closeCreateUserModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Create New group</h2>
        <div className={styles.createGroupForm}>
          <div className={styles.nameYourGroup}>
            <label htmlFor="groupName">Group Name</label>
            <input
              placeholder="Enter group name"
              type="text"
              name="name"
              id="groupName"
              required
              onChange={handleNameChange}
              value={newGroupName}
            />
          </div>
          <div className={styles.colorYourGroup}>
            <label>Choose Colour</label>
            <div className={styles.colorOptions}>
              {[
                { color: "#B38BFA", id: "purple" },
                { color: "#FF79F2", id: "pink" },
                { color: "#43E6FC", id: "cyan" },
                { color: "#F19576", id: "orange" },
                { color: "#0047FF", id: "darkBlue" },
                { color: "#6691FF", id: "lightBlue" },
              ].map((colorOption) => (
                <button
                  key={colorOption.id}
                  className={`${styles.colorButton} ${
                    colorSelected === colorOption.color ? styles.selected : ""
                  }`}
                  style={{ backgroundColor: colorOption.color }}
                  onClick={() => handleSelectedColor(colorOption.color)}
                />
              ))}
            </div>
          </div>
          <button
            className={styles.createGroupButton}
            onClick={createGroupName}
            disabled={!isButtonDisabled}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
