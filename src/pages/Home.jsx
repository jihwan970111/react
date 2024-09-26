import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import workStyles from './Works.module.css';
import useUsernameStore from '../store';
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import styles from './Home.module.css';
import Layout from '../components/layout';

function Home() {

    const { username } = useUsernameStore();

    return (
        <Layout>
        <div className={workStyles.container}>

            <div className={workStyles.pagename}>
                <div className={workStyles.flexStart}>
                    <IoHomeOutline />
                    <div className={workStyles.marginRight10}></div>
                    <div>HOME</div>
                </div>
                <div className={workStyles.username}>
                    Hi, {username}
                </div>
            </div>

            <div>
                <h3>This is example for Polytech lesson</h3>
                <div className={styles.techspecTitle}>
                    <h4>Tech spec</h4>
                    <FaRegArrowAltCircleDown />
                </div>
                <li>Create-react-app</li>
                <li>React - useEffect</li>
                <li>Fetch data(json)</li>
                <li>React-router-dom</li>
                <li>Zustand</li>
                <li>CSS module</li>
                <li>React-icons</li>

            </div>
        </div>
        </Layout>
    );
}

export default Home;