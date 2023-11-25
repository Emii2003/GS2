// TwoDivsLayout.js
"use client"

import Link from 'next/link';
import HeaderAreaRestrita from '@/components/HeaderAreaRestrita/HeaderAreaRestrita';
import styles from './areaRestrita.module.css';

// import { useEffect } from 'react';

export default function AreaRestrita() {

    return (
        <div>
            <HeaderAreaRestrita />
            <h1 className={styles.title}>O que você deseja realizar?</h1>
            <div className={styles.container}>
                {/* Divisão 1 */}
                <div className={styles.square}>
                    <Link href="/areaMonitoramento" className={styles.link}>
                        Monitoramento
                    </Link>
                </div>

                {/* Divisão 2 */}
                <div className={styles.square}>
                    <Link href="/areaMetas" className={styles.link}>
                        Metas
                    </Link>
                </div>

                <div className={styles.square}>
                    <Link href="/" className={styles.link}>
                        Encerrar sessão
                    </Link>
                </div>
            </div>
        </div>
    );
}
