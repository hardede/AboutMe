import Circles from "../../UI/circles/Circles";
import MetaTitle from "../../UI/MetaTitle";
import AboutMe from "./about-me/AboutMe";
import Grid from "./grid/Grid";
import styles from "./Home.module.scss";
import RecentVideos from "./recent-videos/RecentVideos";

const Home = ({ links, me }) => {
  return (
    <section className={styles.section}>
      <MetaTitle title="Hardede Links | Все полезные ссылки тут" />
      <div className={styles.container}>
        <AboutMe me={me} />
        <RecentVideos />
        <Grid links={links} />
      </div>
      <Circles />
    </section>
  );
};

export default Home;
