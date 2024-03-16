import { useSelector } from "react-redux";
import useMovieTailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ MovieId }) => {
  useMovieTailer(MovieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
