"use client";
import styles from "./login.module.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles["heading-3"]}>Bake 'n Cake</div>

      <div className={styles["login-box"]}>
        <h2 className={styles.heading}>Welcome Back</h2>
        <h2 className={styles["heading-2"]}>
          Sign in to your account to continue
        </h2>

        {/* Email */}
        <h2 className={styles["form-heading"]}>Email Address</h2>
        <form className={styles.form}>

          <div className={styles["input-wrapper"]}>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              autoComplete="email"
            />


          </div>
        </form>
        <h2 className={styles["form-heading"]}>Password</h2>
        <form className={styles.form}>

          <div className={styles["input-wrapper"]}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />

            <span
              className={styles["eye-icon"]}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </form>
        <div className={styles["forgot-password"]}> Forgot password?</div>
        <button className={styles["login-button"]}
        onClick={() => router.push("/home")}>Sign in</button>
        <div className={styles["divider"]}>OR</div>
        <div className={styles["signup-link"]}>Don't have an account? Sign up</div>
      </div>
    </main>
  );
}
