import Image from "next/image";
import React from "react";
import styles from "./Sidebar.module.css";
type SidebarProps = object;

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userInfo}>
        <Image
          src="/images/3d2235a834e76ce4fb79333a26fac0785eb7b72695ee2c306c8e970af402b9a7.png"
          alt="User avatar"
          className={styles.avatar}
          width={27}
          height={27}
        />
        <div>
          <h2 className={styles.welcomeText}>Welcome back</h2>
          <div className={styles.nameWrapper}>
            <h3 className={styles.userName}>Ahmed abidi</h3>
            <button
              className={styles.notificationButton}
              aria-label="Notifications"
            >
              <Image
                src="/images/c200f6fa9ca2aa390cb6c41b04134912a3bda7a79c147a75da1b4a65f8752f57.png"
                alt=""
                className={styles.notificationIcon}
                width={27}
                height={27}
              />
            </button>
          </div>
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#dashboard" className={styles.navLink}>
              <Image
                src="/images/bd2b441821ade8847dba19b4bfe97d0bae464838157fb00ed71ac519e41aa450.svg"
                alt=""
                className={styles.navIcon}
                width={24}
                height={24}
              />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#calendar" className={styles.navLink}>
              <Image
                src="/images/fefc78bd53e2fbd81af8e0ae7ec93a26951aa63b5d19996bc2e199f514618ccd.svg"
                alt=""
                width={24}
                height={24}
              />
              Calendar
            </a>
          </li>
          <li>
            <a href="#meeting" className={styles.navLink}>
              <Image
                src="/images/edbc71051f92687cd401cbc8a9e5b499b7c309849ddfacedb4c6e62ff376e264.svg"
                alt=""
                width={24}
                height={24}
              />
              Meeting
            </a>
          </li>
          <li>
            <a href="#messages" className={styles.navLink}>
              <Image
                src="/images/7020a21bca6e9d1575104adf3b54e9ba7690e867bcdad6d12d124e97f1fd6ed4.svg"
                alt=""
                width={24}
                height={24}
              />
              Messages
            </a>
          </li>
          <li>
            <a href="#records" className={styles.navLink}>
              <Image
                src="/images/a1fbe5f782cde5b29545d2ed8f81d47de08bd9fda14d08c3baa2dc509c114e59.svg"
                alt=""
                width={24}
                height={24}
              />
              Records
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.groupsSection}>
        <a href="#groups" className={styles.groupsLink}>
          <Image
            src="/images/2da636dcb7de8eca052b190ac5e65ef5a8232e8b9b63d5ddb9d7ab885c87e8f0.svg"
            alt=""
            width={24}
            height={24}
          />
          Groups
        </a>
        <Image
          src="/images/d46394442ccd808da3555320ff546bd4514181890d330598f7d05ba35e4779e2.png"
          alt=""
          width={22}
          height={18}
        />
      </div>
      <button className={styles.logoutButton}>
        <Image
          src="/images/ba948a769ad2b085a381f0e64ab571827f11f6dd6aa86b1bba89e2b5c9dc2d02.svg"
          alt=""
          width={24}
          height={24}
        />
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;
