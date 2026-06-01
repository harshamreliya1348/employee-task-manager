import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ elem }) => {
  const [userDatas, setUserDatas] = useContext(AuthContext);

  const acceptTask = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));

    employees.forEach((emp) => {
      emp.tasks.map((task) => {
        if (task.taskTitle == elem.taskTitle) {
          task.active = true;
          task.newTask = false;
          emp.taskNumber.active += 1;
          emp.taskNumber.newTask -= 1;
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
    <div className="shrink-0 rounded-xl h-full w-60 lg:w-63 bg-red-500 p-3">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 font-bold p-1 rounded">{elem.category}</h2>
        <h4 className="font-bold">{elem.taskDate}</h4>
      </div>
      <div className="mt-5 ">
        <h2 className="text-2xl font-bold">{elem.taskTitle}</h2>
        <h3 className="font-semibold ml-2 mt-3">{elem.taskDescription}</h3>
      </div>
      <div className="mt-4 w-full ">
        <button
          onClick={() => {
            acceptTask();
          }}
          className="bg-green-600 rounded active:scale-95 p-2 w-full font-bold"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
