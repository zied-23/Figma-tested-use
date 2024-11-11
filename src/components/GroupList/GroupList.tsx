import React from "react";
import GroupCard from "./GroupCard";
import styles from "./GroupList.module.css";
import SearchFilter from "./SearchFilter";
import Sidebar from "./Sidebar";

type GroupListProps = object;

const GroupList: React.FC<GroupListProps> = () => {
  const groups = [
    {
      id: 1,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
    {
      id: 2,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
    {
      id: 3,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
    {
      id: 4,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
    {
      id: 5,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
    {
      id: 6,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
    {
      id: 7,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
    {
      id: 8,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
    {
      id: 9,
      name: "Groupe A",
      createdDate: "20/02/2022",
      training: "Web development",
    },
  ];

  return (
    <main className={styles.adminGroups}>
      <div className={styles.layout}>
        <Sidebar />
        <section className={styles.mainContent}>
          <header className={styles.header}>
            <div>
              <h1 className={styles.title}>Welcome to groups list</h1>
              <p className={styles.subtitle}>
                You&apos;re doing great this week, keep it up!
              </p>
            </div>
            <SearchFilter />
          </header>
          <div className={styles.groupGrid}>
            {groups.map((group) => (
              <GroupCard key={group.id} {...group} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default GroupList;
