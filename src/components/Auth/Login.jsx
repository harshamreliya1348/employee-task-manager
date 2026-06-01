import { useState } from "react";

const Login = ({ userHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [selectValue, setSelectValue] = useState("employee");

  const formHandle = (e) => {
    e.preventDefault();
    userHandler(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen bg-black text-white flex justify-center items-center">
      <div className="border-2 h-auto w-auto px-10 py-30 rounded-xl border-cyan-600 flex justify-center items-center shadow-lg shadow-gray-600">
        <form
          onSubmit={(e) => {
            formHandle(e);
          }}
          className="flex flex-col"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 rounded-full p-2 border-cyan-700 outline-none text-xl placeholder:text-gray-400"
            required
            type="email"
            placeholder="Enter email"
          ></input>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 mt-5 rounded-full p-2 border-cyan-700 outline-none text-xl placeholder:text-gray-400"
            required
            type="password"
            placeholder="Enter password"
          ></input>
          {/* <select
            value={selectValue}
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
            className="w-[50%] mt-5 border-2 border-cyan-700 rounded-full p-3 bg-black text-white outline-none"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select> */}
          <button className="active:scale-x-95 border-none mt-5 rounded-full p-2 bg-cyan-700 outline-none text-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
