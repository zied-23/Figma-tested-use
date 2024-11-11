import Image from "next/image";
import React from "react";
import styles from "./SearchFilter.module.css";

type SearchFilterProps = object;

const SearchFilter: React.FC<SearchFilterProps> = () => {
  return (
    <div className={styles.searchFilterContainer}>
      <div className={styles.searchWrapper}>
        <Image
          src="/images/f3c350366efdcc271cd3bcbba57d5cbca2438b5e6164343057de571acdf91b61.png"
          alt=""
          className={styles.searchIcon}
          height={27}
          width={27}
        />
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
      <button className={styles.filterButton}>
        <Image
          src="/images/a3e68c918ce8f74fd5d9d404c12bc759bc7e5ca872697a7ee8d9f22a8c9100b5.png"
          alt=""
          className={styles.filterIcon}
          height={31}
          width={31}
        />
        Filter
        <Image
          src="/images/d2d8a52f8df8702cff1a4020e328e32e2875147ae059a50713a9479190748431.png"
          alt=""
          className={styles.arrowIcon}
          height={27}
          width={27}
        />
      </button>
    </div>
  );
};

export default SearchFilter;
