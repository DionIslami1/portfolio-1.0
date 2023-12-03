'use client'
import styles from "./page.module.scss";

export default function Home() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>HEADER</div>
      <div className={styles.banner}>
        <h1>Welcome.</h1>
        <div className={styles.contentBanner}>
        <p>
          My name is Dion Islami, I&apos;m a full-stack developer based in
          Pristina, Kosovo, Europe. I have developed many types of full-stack apps from
          well know Medicine applications to Ecommerce platforms. 
        </p>
        <br />
        <p>
          I&apos;m passionate about cutting-edge, database, clean code, implementation, pixel-perfect, beautiful
          interfaces and intuitively implemented UX.
        </p>
        </div>
      </div>
    </div>
  );
}
