import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.home_content}>
      <div className={styles.textbox_home}>
        <div className={styles.title}>
          <h1 className={styles.home_title}>Olá, somos</h1>
          <h1 className={styles.home_title}>a Rehappy </h1>
        </div>

        <div className={styles.subtitle}>
          <p>
            Ainda não temos conteúdo, mas você pode admirar a beleza por enquanto. Eu sou bonito e fútil.
          </p>
        </div>
      </div>

      <div className={styles.home_image}>
        <Image src={'Home/Img_doctor.svg'} width={400} height={400}></Image>
      </div>
    </div>
  );
}
