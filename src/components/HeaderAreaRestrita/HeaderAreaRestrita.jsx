"use client";

import styles from './HeaderAreaRestrita.module.css'

export default function HeaderAreaRestrita() {
    return (
        <div className={styles.div}>
            <div className={styles.background_nav}>
                <p>Olá, {sessionStorage.getItem('nome')}</p>
            </div>
        </div>
    )
}