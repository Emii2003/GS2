import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.home_content}>
          <div className={styles.home_container}>
            <div className={styles.textbox_home}>
                  <div className={styles.title}>
                      <h1 className={styles.home_title}>Olá, somos</h1>
                      <h1 className={styles.home_title}>a Rehappy </h1>
                  </div>

                  <div className={styles.subtitle}>
                      <p>
                          Te ajudaremos com o vício em depêndencias químicas.
                      </p>
                  </div>
              </div>

              <div className={styles.home_image}>
                  <Image src={'Home/Img_doctor.svg'} width={400} height={400}></Image>
              </div>
          </div>
            

            <div className={styles.content_projeto}>
                <h1>Sobre nosso projeto.</h1>
                <div className={styles.row_card}>
                    <div className={styles.card}>
                        <div className={styles.ImageCard}>
                            <Image src={"/Home/Vector.svg"} alt="Imagem de uma moça com medicações"
                                   layout="fill" className={styles.ImageCard}/>
                        </div>
                        <p>O objetivo desta solução é ajudar pessoas com depêndencia química, visando contribuir para a luta contra o vício, visto que há inúmeras pessoas que enfrentam este desafio. </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.ImageCard}>
                            <Image src={"/Home/Vector2.svg"} alt="Imagem de várias pessoas trabalhando"
                                   layout="fill" className={styles.ImageCard}/>
                        </div>
                        <p>Estamos trabalhando na aplicação, mas voçê pode conferir um exemplo de monitoramento pessoal do usuário e criação de metas (visando ajudar a diminuir o consumo). </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
