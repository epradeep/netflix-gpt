import { BACKGROUND_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptmovieSuggestions from "./GptmovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 opacity-80">
        <img src={BACKGROUND_IMG} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptmovieSuggestions />
    </div>
  );
};

export default GptSearch;
