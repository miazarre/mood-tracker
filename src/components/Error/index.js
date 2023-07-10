import { Link } from "react-router-dom";

import { Player } from "@lottiefiles/react-lottie-player";

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Link to="/" className="mt-40">
          <div className="mt-10">
            <Player
              src="https://assets1.lottiefiles.com/packages/lf20_hu0tnnje.json"
              autoplay
              loop
              mode="normal"
              className="player"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Error;
