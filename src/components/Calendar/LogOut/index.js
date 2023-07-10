import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = () => {
  const handleLogout = () => {
    // TODO
  };

  return (
    <div className="flex justify-center sm:justify-end items-center p-10">
      <button onClick={handleLogout}>
        <FaSignOutAlt size={60} className="mr-4 hover:text-pink-500" />
      </button>
    </div>
  );
};

export default LogoutButton;
