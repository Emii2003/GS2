import React from "react";
import Icons from "../Icons/Icons";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.textboxFooter}>
                <p>Thinking five revolution &copy; 2023</p>
            </div>
            <div className={styles.iconsFooter}>
                <Icons />
            </div>
        </footer>
    );
}
