import React from 'react';
import styles from './Textbox.module.css';

export default function TextBox() {
  return (
    <div className={styles.formTitleContainer}>
      <h1 className={styles.formTitle}>Bem vindo a Recupere</h1>
      <p>Insira seus dados</p>
    </div>
  );
}
