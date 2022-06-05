import styles from "./Grid.module.scss";
import GridItem from "./GridItem";

const Grid = ({ links }) => {
  if (!links) {
    return null;
  }

  return (
    <div className={styles.grid}>
      {links && links.map(link => <GridItem key={link._id} item={link} />)}
    </div>
  );
};

export default Grid;
