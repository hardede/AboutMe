import axios from "axios";
import { useQuery } from "react-query";
import styles from "./RecentVideos.module.scss";
import VideoItem from "./VideoItem";

const RecentVideos = () => {
  const { data, isLoading } = useQuery(
    "get recent videos",
    () => axios.get("/api/youtube"),
    {
      select: ({ data }) => data,
    }
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <div className={styles.title}>Useful channels</div>
        <div className={styles.items_wrapper}>
          {isLoading ? (
            <div className="my-auto w-10 h-10 rounded-full border-dashed border-4 border-red-500 block animate-spin">

            </div>
          ) : data?.length ? (
            data.map(video => <VideoItem key={video.videoId} item={video} />)
          ) : (
            "Until loaded!"
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentVideos;
