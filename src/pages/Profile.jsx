import React from 'react';
import styles from './Profile.module.css';

export default function Profile({ profile, onClick }) {
    const { name, image } = profile;

    return (
        <div className={styles.profile} onClick={onClick}>
            <img src={image} alt={name} className={styles.profileImage} />
            <span className={styles.profileName}>{name}</span>
        </div>
    );
}
