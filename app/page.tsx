import styles from "./login.module.css";

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles["heading-3"]}>Bake 'n Cake </div>
      <div className={styles["login-box"]}>
        <h2 className={styles["heading"]}>Welcome Back</h2>
        <h2 className={styles["heading-2"]}>Sign in to your account to continue

        </h2>
      </div>
    </main>
  );
}
