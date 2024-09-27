import React, { useState } from 'react';
import styles from './EditProfileModal.module.css';

export default function EditProfileModal({ profile, closeModal, updateProfile }) {
    const [name, setName] = useState(profile.name);
    const [image, setImage] = useState(profile.image);

    // 이미지 선택 핸들러
    const handleImageChange = (e) => {
        {/*file로 받아오기 위해 FileReader를 선언*/}
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSave = () => {
        const updatedProfile = {
            ...profile,
            name: name,
            image: image,
        };
        updateProfile(updatedProfile);
    };
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>프로필 변경</h2>
                <div className={styles.profileImageContainer}>
                    <img src={image} alt="프로필 이미지" className={styles.profileImage} />
                    <label className={styles.uploadButton}>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        이미지 변경
                    </label>
                </div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.nameInput}
                />
                <div className={styles.actions}>
                    <button className={styles.saveButton} onClick={handleSave}>저장</button>
                    <button className={styles.cancelButton} onClick={closeModal}>취소</button>
                </div>
            </div>
        </div>
    );
}
