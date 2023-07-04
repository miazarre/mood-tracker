import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-slate-950">
      <div className="bg-design-mood h-40 w-full"></div>
      <h1 className="relative sm:my-10 md:my-20 font-main sm:text-3xl md:text-9xl">
        Mood Tracker
      </h1>
      <p className="sm:my-10 md:my-20 sm:mx-64 md:mx-80 sm:py-10 md:py-20 sm:px-64 md:px-80 font-second sm:text-xl md:text-3xl text-center">
        Sometimes it's hard to take a step back and understand our mental state.
        Here's a mood tracker, to be completed daily, which gives you a visual
        of the current month and how you're feeling.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:space-x-4">
        <Link to="/login">
          <button className="bg-slate-950 font-second hover:bg-blue-700 text-white text-2xl py-2 px-4 rounded h-20 w-40">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-slate-950 font-second hover:bg-green-700 text-white text-2xl py-2 px-4 rounded h-20 w-40 mt-4 sm:mt-0">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
