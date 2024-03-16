import useNowPlaingMovies from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlaingMovies();
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
