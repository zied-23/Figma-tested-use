import Image from "next/image";
import React from "react";
import styles from "./GroupCard.module.css";

interface GroupCardProps {
  name: string;
  createdDate: string;
  training: string;
}

const GroupCard: React.FC<GroupCardProps> = ({
  name,
  createdDate,
  training,
}) => {
  return (
    <article className={styles.teamsCard}>
      <h3 className={styles.groupName}>{name}</h3>
      <p className={styles.createdDate}>Created in {createdDate}</p>
      <div className={styles.trainingInfo}>
        <span className={styles.trainingLabel}>Training:</span>
        <span className={styles.trainingValue}>{training}</span>
      </div>
      <div className={styles.membersSection}>
        <span className={styles.membersLabel}>Members:</span>
        <div className={styles.memberAvatars}>
          <Image
            src="/images/2493d93caccffe05f3b383c3c3c2f96364bbc8f1fc5d71d8fb21454686ab3d2c.png"
            alt="Member avatar"
            className={styles.memberAvatar}
            width={26}
            height={26}
          />
          <Image
            src="/images/753585211087069596778beda9e771b3f541e8d39b3d65922bbf8b37ef4d0d59.png"
            alt="More members"
            className={styles.moreMembers}
            width={26}
            height={26}
          />
        </div>
      </div>
    </article>
  );
};

export default GroupCard;
