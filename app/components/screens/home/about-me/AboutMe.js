import Image from "next/image";
import { APP_URL } from "../../../../constants";
import styles from "./AboutMe.module.scss";
import DescriptionButton from "./description-button/DescriptionButton";
import EmailButton from "./email-button/EmailButton";

const AboutMe = ({ me }) => {
  if (!me) {
    return null;
  }
  return (
    <div className={styles.me}>
      <div className={styles["image-wrapper"]}>
        <Image
          src={`${APP_URL}/${me.avatar}`}
          width={190}
          height={190}
          className={styles.image}
          alt="hello"
        />
      </div>
      <div className={styles.heading}>
        <span>Hardede</span>
        <Image
          src={`${APP_URL}/icons/verified.svg`}
          width={16}
          height={16}
          alt=""
        />
      </div>
      <EmailButton />
      <DescriptionButton description={me.description} />
    </div>
  );
};

export default AboutMe;
