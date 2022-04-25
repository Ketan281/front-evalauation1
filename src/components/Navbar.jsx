import React from 'react';
import styles from "./Form.module.css"
import {
    Link
} from 'react-router-dom';

 const Navbar = () => {
    return (
    <div className={styles.topnav}>
        <Link to='/one' className={styles.linkCss}>1</Link> &nbsp;&nbsp;
        <Link to='/two' className={styles.linkCss}>2</Link>&nbsp;&nbsp;
        <Link to='/users' className={styles.linkCss}>users</Link>&nbsp;&nbsp;
    </div>
    );
}

export {Navbar}