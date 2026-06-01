import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [empName, setEmpName] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [userDatas, setUserDatas] = useContext(AuthContext);
  const [task, setTask] = useState({});
  const formHandler = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      completedTask: false,
      failedTask: false,
    };
    setTask(newTask);
    const data = userDatas.employees;
    data.forEach(function (elem) {
      if (elem.firstName == empName) {
        elem.tasks.push(newTask);
        elem.taskNumber.newTask = elem.taskNumber.newTask + 1;
      }
    });
    localStorage.setItem("employees", JSON.stringify(data));
    setTaskTitle("");
    setTaskDate("");
    setEmpName("");
    setCategory("");
    setTaskDescription("");
    window.location.reload();
  };

  return (
    <div className="mt-10 bg-[#1c1c1c] p-5 rounded">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="flex justify-between flex-wrap"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <div>
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="w-full placeholder:text-gray-500 outline-none border-white border p-1 rounded"
              type="text"
              placeholder="enter task title"
            ></input>
          </div>
          <div>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="w-full placeholder:text-gray-500 outline-none border-white border p-1 rounded"
              type="date"
            ></input>
          </div>
          <div>
            <h3>Asign to</h3>
            <input
              value={empName}
              onChange={(e) => {
                setEmpName(e.target.value);
              }}
              className="w-full placeholder:text-gray-500 outline-none border-white border p-1 rounded"
              type="text"
              placeholder="employee name"
            ></input>
          </div>
          <div>
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-full placeholder:text-gray-500 outline-none border-white border p-1 rounded"
              type="text"
              placeholder="design,dev,etc"
            ></input>
          </div>
        </div>
        <div className="h-full w-full lg:w-2/5">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-30 lg:h-43 placeholder:text-gray-500 outline-none border-white border p-1 rounded"
          ></textarea>
          <br />
          <button className="w-full bg-emerald-600 active:scale-x-90 p-2 mt-5 rounded">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
