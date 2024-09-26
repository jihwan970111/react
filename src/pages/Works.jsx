import React, { useEffect, useState } from 'react';
import styles from './Works.module.css';
import MyItem from '../components/MyItem';
import { MdOutlineChangeCircle } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import useUsernameStore from '../store';
import Layout from '../components/layout';

function Works() {
    const [filter, setFilter] = useState('TODO');
    const [totalCount, setTotalCount] = useState(0);
    const [dataList, setDataList] = useState([]);

    const { username } = useUsernameStore();
    
    useEffect(() => {
        fetch(`data/${filter === 'TODO' ? 'todoList.json' : 'doneList.json'}`)
            .then(res => res.json())
            .then(data => {
                console.log('data 받아옴');
                setDataList(data);
            })
    }, [filter])

    useEffect(() => {
        setTotalCount(dataList.length);
    }, [dataList])

    const onToggle = () => {
        setFilter(filter === 'TODO' ? 'DONE' : 'TODO');
    }

    return (<Layout>
        <div className={styles.container}>

            <div className={styles.pagename}>
                <div className={styles.flexStart}>
                    <HiOutlineComputerDesktop />
                    <div className={styles.marginRight10}></div>
                    <div>WORKS</div>
                </div>
                <div className={styles.username}>
                    Hi, {username}
                </div>
            </div>

            <div className={styles.listBox}>
                <div className={styles.headerBox}>
                    <div>total count : {totalCount}</div>
                    <div className={styles.header}>{filter} list</div>
                    <button className={styles.toggleButton} onClick={onToggle}><MdOutlineChangeCircle /></button>
                </div>

                {dataList.map(item => (<MyItem key={item.id} item={item} />))}
            </div>
        </div>
        </Layout>);
}

export default Works;