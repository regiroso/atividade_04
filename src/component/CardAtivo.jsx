import styles from '../styles/CardAtivo.module.css';

export function CardAtivo({ titulo, children }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.titulo}>{titulo}</h3>
      <div className={styles.conteudo}>
        {children}
      </div>
    </div>
  );
}