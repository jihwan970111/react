import React from 'react';
import styles from './Profile.module.css';

export default function Profile({ profile, onClick }) {
    const { name, image } = profile;

    return (
        /*수정모드일 시 이미지 클릭하면 수정 할 수 있는 모달창이 켜지게 onClick을 받아오고 돌려준다. */
        <div className={styles.profile} onClick={onClick}> 
            <img src={image} alt={name} className={styles.profileImage} />
            <span className={styles.profileName}>{name}</span>
        </div>
    );
}
