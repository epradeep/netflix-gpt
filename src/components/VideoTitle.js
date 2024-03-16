const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="py-6 text-md w-1/3">{overview}</p>
      <div className="flex items-center justify-stretch gap-4">
        <button className="bg-white text-black px-4 py-2 text-lg rounded-md hover:bg-slate-200 hover:text-black">
          Play
        </button>
        <button className=" bg-gray-600 text-white px-4 py-2 text-lg bg-opacity-50 rounded-md hover:bg-slate-100 hover:text-black">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
