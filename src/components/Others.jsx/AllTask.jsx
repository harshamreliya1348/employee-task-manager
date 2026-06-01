import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userDatas, setUserDatas] = useContext(AuthContext);
  useEffect(() => {
    console.log("Admin dashboard data changed:", userDatas);
  }, [userDatas]);

  return (
    <div id="task" className="p-5 rounded mt-5 ">
      <div className="flex justify-between border-2 border-green-600 p-2 rounded mb-2 bg-gray-900">
        <h2 className="w-1/5 font-bold text-lg flex justify-center text-white ">
          Emp Name
        </h2>
        <h2 className="w-1/5 font-bold text-lg flex justify-center text-red-600">
          New Task
        </h2>
        <h2 className="w-1/5 font-bold text-lg flex justify-center text-yellow-600">
          Acc. Task
        </h2>

        <h2 className="w-1/5 font-bold text-lg flex justify-center text-blue-800">
          Com. Task
        </h2>
        <h2 className="w-1/5 font-bold text-lg flex justify-center text-pink-800">
          Faild Task
        </h2>
      </div>
      <div className="">
        {userDatas.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-between border-2 border-green-600 p-2 rounded mb-2"
            >
              <h2 className="w-1/5 font-bold text-lg flex justify-center text-white">
                {elem.firstName}
              </h2>
              <h2 className="w-1/5 font-bold text-lg flex justify-center text-red-600">
                {elem.taskNumber.newTask}
              </h2>
              <h2 className="w-1/5 font-bold text-lg flex justify-center text-yellow-600">
                {elem.taskNumber.active}
              </h2>
              <h2 className="w-1/5 font-bold text-lg flex justify-center text-blue-800">
                {elem.taskNumber.completedTask}
              </h2>
              <h2 className="w-1/5 font-bold text-lg flex justify-center text-pink-800">
                {elem.taskNumber.failedTask}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
