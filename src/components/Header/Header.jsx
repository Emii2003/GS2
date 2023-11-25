import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src={"/Header/Logo_Temporaria.svg"} width={80} height={100} alt = "Logo do site"/>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <Link href={'/'} className={styles.linkHeader}>
                        Home
                    </Link>
                    <span>/</span>
                    <Link href={'/equipe'} className={styles.linkHeader}>
                        Equipe
                    </Link>
                </ul>
            </nav>
            <div className={styles.buttonSection}>
                <Link className={styles.headerCadastro} href={'./cadastro'}>
                    Cadastro
                </Link>
                <Link className={styles.headerLogin} href={'./login'}>
                    Login
                </Link>
            </div>
        </header>
    );
}
