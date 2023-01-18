import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarOpened, setNavbarOpened] = useState(false);

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > 0) {
        return navbarRef.current?.classList.add(styles.scrolled);
      }

      navbarRef.current?.classList.remove(styles.scrolled);
    };

    document.addEventListener("scroll", handleOnScroll);

    () => document.removeEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <header ref={navbarRef} className={styles.navbarWrapper}>
      <div className={`container ${styles.navbarContainer}`}>
        <Link href="/">
          <Image alt="Club Logo" src="/logo.jpg" height={40} width={40} />
        </Link>

        <button
          className={`${styles.mobileNavToggle} ${
            navbarOpened ? styles.active : ""
          }`}
          aria-controls="primary-navigation"
          aria-expanded={navbarOpened}
          aria-label="toggle navigation"
          onClick={() => setNavbarOpened((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.primaryNavigation} ${
            navbarOpened ? styles.active : ""
          }`}
        >
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={`${styles.navLink} active`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/details" className={styles.navLink}>
                Details
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/register" className={styles.navLink}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
