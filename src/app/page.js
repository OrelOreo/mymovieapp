import MediaCard from "@/components/media-card/MediaCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <MediaCard mediaId={10} />
    </div>
  );
}