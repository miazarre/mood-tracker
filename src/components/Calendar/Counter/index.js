import {
  FaRegFaceSmile,
  FaRegFaceFrown,
  FaRegFaceMeh,
  FaRegFaceGrin,
  FaRegFaceSadTear,
} from "react-icons/fa6";

const Counter = () => {
  return (
    <div className="flex justify-center items-center mb-10 mx-60 rounded-md drop-shadow-md p-10 bg-blue-50">
      <FaRegFaceSmile size={60} className="mr-5 text-yellow-300" />

      <FaRegFaceFrown size={60} className="mr-5 text-red-700" />

      <FaRegFaceMeh size={60} className="mr-5 text-slate-400" />

      <FaRegFaceGrin size={60} className="mr-5 text-emerald-500" />

      <FaRegFaceSadTear size={60} className="mr-5 text-sky-600" />
    </div>
  );
};

export default Counter;
