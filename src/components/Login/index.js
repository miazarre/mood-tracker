import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = ({ setUser, setIsLogged }) => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4">
        <div className="flex flex-col items-center text-slate-950 border-2 border-slate-950 rounded-md">
          {" "}
          <h1 className="relative sm:my-10 md:my-20 font-main sm:text-3xl md:text-7xl">
            Hi again
          </h1>
          <div className="form">
            {login !== "" && (
              <p className="input-container--message">{login}</p>
            )}
            <form className="font-second">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="grid grid-cols-1 mb-4 p-2 rounded border border-slate-300 hover:border-violet-300"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="grid grid-cols-1 mb-4 p-2 rounded border border-slate-300 hover:border-violet-300"
              />
              <Link to="/calendar">
                <button className="bg-slate-950 font-second hover:bg-teal-300 text-white text-xl mx-8 sm:my-5 md:my-10 py-2 px-4 rounded h-20 w-40">
                  Log in
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
