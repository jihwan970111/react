import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Menu.module.css';
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";

const Menu = () => {
    const navigateTo = useNavigate();
    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={() => navigateTo('/')}><IoHomeOutline /></button>
            <button className={styles.btn} onClick={() => navigateTo('/about')}><IoPersonCircleOutline /></button>
            <button className={styles.btn} onClick={() => navigateTo('/works')}><HiOutlineComputerDesktop /></button>
        </div>
    );
};

export default Menu;