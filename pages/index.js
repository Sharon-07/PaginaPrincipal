import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Códigos de Hamming y Códigos de Golay
        </h1>

        <div className={styles.grid}>
          <a href="https://codigoshamming.vercel.app/" className={styles.card}>
            <h2>Códigos de Hamming &rarr;</h2>
            <p>Actualmente, los códigos de Hamming son fundamentales en la teoría de la codificación y tienen una gran 
              cantidad de aplicaciones prácticas.

            </p>
          </a>

          <a href="https://golay.vercel.app/" className={styles.card}>
            <h2>Códigos de Golay &rarr;</h2>
            <p>En las matemáticas y en la informática el código binario de Golay es un tipo de código correctorde 
              errores usado en las comunicaciones digitales.

            </p>
          </a>

          <a
            href="https://demostraciones-chi.vercel.app/"
            className={styles.card}
          >
            <h2>Demostraciones &rarr;</h2>
            <p>G<sub>24</sub> tiene distancia mínima 8.
            </p>
            <p>Todas las palabras de G<sub>24</sub> tienen peso mínimo de 4.
            </p>
          </a>

          <a
            href="https://ejemplos.vercel.app/"
            className={styles.card}
          >
            <h2>Ejemplos en Matlab&rarr;</h2>
            <p>
              Ejemplos de Códigos de Hamming.
            </p>
            <p>
            Ejemplos de Códigos de Golay.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
