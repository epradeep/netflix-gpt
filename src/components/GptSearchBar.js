import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 gap-2">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-2 m-2 col-span-9"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-md col-span-3">
          {lang[langKey].seach}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
