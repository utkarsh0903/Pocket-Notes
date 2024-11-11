import React, { useState } from "react";

import styles from "./createuserModal.module.css";

const CreateUserModal = ({ closeCreateUserModal, setNote }) => {
    
  const [newGroupName, setNewGroupName] = useState("");
  const [colorSelected, setColorSelected] = useState("");

  const createGroupName = () => {
    closeCreateUserModal();
  };

  const handleNameChange = (e) => {
    setNewGroupName(e.target.value);
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
              name="Name"
              id="groupName"
              required
              onChange={handleNameChange}
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
