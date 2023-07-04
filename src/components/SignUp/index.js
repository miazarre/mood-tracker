import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4">
        <div className="flex flex-col items-center text-slate-950 border-2 border-slate-950 rounded-md">
          <h1 className="relative sm:my-10 md:my-20 font-main sm:text-3xl md:text-7xl">
            Sign up
          </h1>
          <form className="font-second">
            <input
              type="text"
              placeholder="First name"
              name="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              className="grid grid-cols-1 mb-4 p-2 rounded border border-slate-300 hover:border-violet-300"
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="grid grid-cols-1 mb-4 p-2 rounded border border-slate-300 hover:border-violet-300"
            />
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="grid grid-cols-1 mb-4 p-2 rounded border border-slate-300 hover:border-violet-300"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="grid grid-cols-1 mb-4 p-2 rounded border border-slate-300 hover:border-violet-300"
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmation"
              value={confirmation}
              onChange={(event) => setConfirmation(event.target.value)}
              className="grid grid-cols-1 mb-6 p-2 rounded border border-slate-300 hover:border-violet-300"
            />
            <Link to="/login">
              <button className="bg-slate-950 font-second hover:bg-teal-300 text-white text-xl mx-8 sm:my-5 md:my-10 py-2 px-4 rounded h-20 w-40">
                Create your mood tracker{" "}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
