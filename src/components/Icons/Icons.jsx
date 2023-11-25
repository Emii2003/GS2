import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import styles from './Icons.module.css';

export default function Icons() {
    return (
        <div className={styles.iconsFooter}>
            <FaGithub className={styles.icon} />
            <RiInstagramFill className={styles.icon} />
            <FaYoutube className={styles.icon} />
        </div>
    );
}
