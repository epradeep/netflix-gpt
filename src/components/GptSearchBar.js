import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const saerchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSerachClick = async (e) => {
    e.preventDefault();
    console.log(saerchText.current.value);
    //Make an API call to GPT API and get Movie Results
    const gptQuery =
      "Act as a Movie Recomandation system and suggest some movies for the query" +
      saerchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    saerchText.current.value = null;

    if (!gptResults.choices) {
      //TODO: Write Error Handling
    }
    console.log(gptResults.choices[0]?.message.content);
    // "Andaz Apna Apna, Chupke Chupke, Amar Akbar Anthony, Chhoti Si Baat, Namak Halaal";
    const gptMovies = gptResults.choices[0]?.message.content.split(", ");

    //For each will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise,Promise,Promise,Promise,Promise];
    const resultedMovies = await Promise.all(promiseArray);
    console.log(resultedMovies);
    dispatch(
      addGptMovieResults({
        movieNames: gptMovies,
        movieResults: resultedMovies,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 gap-2">
        <input
          ref={saerchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-2 m-2 col-span-9"
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-md col-span-3"
          onClick={handleGptSerachClick}
        >
          {lang[langKey].seach}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
