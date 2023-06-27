import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-slate-950">
      <div className="bg-design-mood h-40 w-full"></div>
      <h1 className="relative mt-20 font-main text-9xl">Mood Tracker</h1>
      <p className="my-20 mx-96 py-20 px-96 font-second text-3xl text-center">
        Sometimes it's hard to take a step back and understand our mental state.
        Here's a mood tracker, to be completed daily, which gives you a visual
        of the current month and how you're feeling.
      </p>
      <div className="flex">
        <Link to="/login">
          <button className="bg-slate-950 font-second hover:bg-blue-700 text-white text-2xl py-2 px-4 rounded h-20 w-40 ">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-slate-950 font-second hover:bg-green-700 text-white text-2xl py-2 px-4 rounded ml-5 h-20 w-40">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
