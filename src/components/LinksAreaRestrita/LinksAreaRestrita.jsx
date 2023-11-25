import React from "react";
import Link from "next/link";
import styles from './LinksAreaRestrita.module.css';

export default function LinksAreaRestrita() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link href={'./areaMonitoramento'}  className={styles.linkNav}>
            Monitoramento
          </Link>
          <Link href={'./areaMetas'} className={styles.linkNav}>
            Metas
          </Link>
          <Link href={'./'} className={styles.linkNav}>
            Encerrar sessão
          </Link>
        </ul>
      </nav>
    </div>
  );
}
