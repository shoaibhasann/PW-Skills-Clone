import { useNavigate } from "react-router-dom";

function Denied() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold bg-gradient-to-r from-[#3e00fa] to-[#d900ed] text-transparent bg-clip-text tracking-widest">
        403
      </h1>
      <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
        Acess Denied...
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
          <span
            onClick={() => navigate("/")}
            className="relative block px-8 py-3 bg-gradient-to-r from-[#3e00fa] to-[#d900ed] border border-current"
          >
            Go Back
          </span>
        </a>
      </button>
    </div>
  );
}

export default Denied;
