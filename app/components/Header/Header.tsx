import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Container from "../Layouts/Container";

export default function Header() {
  return (
    <header className={`p-4 ${styles.header}`}>
      <Container>
        <div className="flex items-center justify-between">
          <a className={styles.logo} href="#">
            <Image src="logo.svg" alt="testvalley" width={130} height={26} />
          </a>
          <nav className={styles.desktopNav}>
            <button className={styles.categoryBtn}>카테고리</button>
            <div className={styles.formControl}>
              <img
                className={styles.formControlPrefixIcon}
                src="./search.svg"
                role="presentation"
              />
              <input
                type="search"
                name=""
                id=""
                placeholder="살까말까 고민된다면 검색해보세요!"
              />
            </div>
            <ul className={styles.navMenu}>
              <li>
                <button>
                  <Image
                    src="./discount-arrow.svg"
                    alt="event"
                    height={28}
                    width={28}
                  />
                </button>
              </li>
              <img src="vertical-bar.svg" role="presentation" />
              <li>
                <button>로그인 / 회원가입</button>
              </li>
            </ul>
          </nav>
          <nav className={styles.mobileNav}>
            <ul className="flex gap-4 items-center justify-center">
              <li>
                <a href="#">
                  <Image
                    src="./bell_default.svg"
                    alt="notification"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <a href="#">
                <Image src="./search.svg" alt="search" width={18} height={20} />
              </a>
              <li></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
