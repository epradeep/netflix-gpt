import useNowPlaingMovies from "../hooks/useNowPlayingMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlaingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MainContainer
          -VideoBackground
          -VideoTitle
        SecondaryContainer
          -MoviesList * n;
          -CardsList * n;
      */}
    </div>
  );
};

export default Browse;
