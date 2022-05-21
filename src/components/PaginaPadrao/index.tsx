import React from 'react';
import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <Outlet/>
        </>
    );
};

export default PaginaPadrao;