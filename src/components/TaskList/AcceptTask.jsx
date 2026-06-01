import { useContext } from "react";
import CompleteTask from "./CompleteTask";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ elem }) => {
  const [userDatas, setUserDatas] = useContext(AuthContext);
  const taskAccepted = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    employees.forEach((emp) => {
      emp.tasks.map((task) => {
        if (elem.taskTitle == task.taskTitle) {
          task.active = false;
          task.completedTask = true;
          emp.taskNumber.active -= 1;
          emp.taskNumber.completedTask += 1;
        }
      });
    });
    localStorage.setItem("employees", JSON.stringify(employees));
    setUserDatas((prev) => ({
      ...prev,
      employees,
    }));
  };

  const taskFaild = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    employees.forEach((emp) => {
      emp.tasks.map((task) => {
        if (elem.taskTitle == task.taskTitle) {
          task.active = false;
          task.failedTask = true;
          emp.taskNumber.active -= 1;
          emp.taskNumber.failedTask += 1;
        }
      });
    });
    localStorage.setItem("employees", JSON.stringify(employees));
    setUserDatas((prev) => ({
      ...prev,
      employees,
    }));
  };

  return (
    <div className="shrink-0 rounded-xl h-full w-60 lg:w-63 bg-orange-500 p-3">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 font-bold p-1 rounded">{elem.category}</h2>
        <h4 className="font-bold">{elem.taskDate}</h4>
      </div>
      <div className="mt-5 ">
        <h2 className="text-2xl font-bold">{elem.taskTitle}</h2>
        <h3 className="font-semibold ml-2 mt-3">{elem.taskDescription}</h3>
      </div>
      <div className="mt-3 flex justify-between">
        <button
          onClick={() => {
            taskAccepted();
          }}
          className="bg-blue-600 rounded active:scale-95 px-3 py-2 font-bold"
        >
          complete
        </button>
        <button
          onClick={() => {
            taskFaild();
          }}
          className="bg-red-600 rounded active:scale-95 py-2 px-3 font-bold"
        >
          faild
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
