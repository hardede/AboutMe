import axios from "axios";
import Home from "../app/components/screens/home/Home";

export const getStaticProps = async () => {
  try {
    const me = await fetch(`${process.env.API_URL}/me`);
    const links = await fetch(`${process.env.API_URL}/links`);
    const meData = await me.json();
    const linksData = await links.json();


    return {
      props: {
        me: meData,
        links: linksData,
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const HomePage = ({ links, me }) => {
  return <Home links={links} me={me} />;
};

export default HomePage;
