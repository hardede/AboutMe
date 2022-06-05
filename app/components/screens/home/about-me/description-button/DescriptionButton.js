import { useOutSide } from "../../../../../hooks/useOutSide";
import cn from "classnames";
import styles from "./DescriptionButton.module.scss";
import parse from "html-react-parser";

const DescriptionButton = ({ description }) => {
  const { isShow, setIsShow, ref } = useOutSide(false);

  return (
    <div className={styles.parent} ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={cn({
          [styles.active]: isShow,
        })}
      >
        <span>About me</span>
      </button>
      {isShow && <article>{parse(description)}</article>}
    </div>
  );
};

export default DescriptionButton;
