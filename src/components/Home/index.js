import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-slate-950">
      <div className="bg-design-mood h-40 w-full"></div>
      <h1 className="relative mt-20 font-main text-9xl">Mood Tracker</h1>
      <p className="m-20 p-20 font-second text-3xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
