import React, { useState } from 'react';
import Menu from '../components/Menu';
import workStyles from './Works.module.css';
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from './About.module.css';
import { AiOutlineLogin } from "react-icons/ai";
import useUsernameStore from '../store';
import Layout from '../components/layout';

function About() {
    const adminUserInfo = {
        id: 'danny',
        pw: '1234'
    }
    const { username, updateUsername } = useUsernameStore();

    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const onLogin = () => {
        if (inputId === adminUserInfo.id && inputPw === adminUserInfo.pw) {
            updateUsername('Danny');
            alert('Hi Danny!');
        } else {
            alert('Wrong ID or PW');
        }
    }

    return (<Layout>
        <div className={workStyles.container}>

            <div className={workStyles.pagename}>
                <div className={styles.flexStart}>
                    <IoPersonCircleOutline />
                    <div className={workStyles.marginRight10}></div>
                    <div>LOGIN</div>
                </div>
                <div className={styles.username}>
                    Hi, {username}
                </div>
            </div>

            <div className={styles.listBox}>
                <div>
                    ID
                    <input className={styles.margin} onChange={(e) => setInputId(e.target.value)} />
                </div>
                <div>
                    PW
                    <input className={styles.margin} onChange={(e) => setInputPw(e.target.value)} />
                </div>
                <button onClick={onLogin} className={workStyles.toggleButton}><AiOutlineLogin /></button>
            </div>
        </div>
        </Layout>);
}

export default About;