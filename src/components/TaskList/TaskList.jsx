import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FaildTask from "./FaildTask";
import NewTask from "./NewTask";

const TaskList = ({ logdata }) => {
  return (
    <div
      id="task"
      className="h-[45%] lg:h-[53%] overflow-x-auto flex justify-start items-center mt-10 gap-5 px-3 py-4 rounded"
    >
      {logdata.tasks.map((elem, idx) => {
        if (elem.completedTask) {
          return <CompleteTask elem={elem} key={idx} />;
        }

        if (elem.failedTask) {
          return <FaildTask elem={elem} key={idx} />;
        }

        if (elem.newTask) {
          return <NewTask elem={elem} key={idx} />;
        }
        if (elem.active) {
          return <AcceptTask logdata={logdata} elem={elem} key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
