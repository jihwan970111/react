import React from 'react';
import styles from './MyItem.module.css';

const MyItem = ({ item }) => {
    return (
        <div key={item.id} className={styles.container}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.date}</div>
        </div>
    );
};

export default MyItem;