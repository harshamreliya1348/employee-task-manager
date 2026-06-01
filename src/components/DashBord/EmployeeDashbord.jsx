import Header from "../Others.jsx/Header";
import Numbers from "../Others.jsx/Numbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashbord = (props) => {
  return (
    <div className="h-screen w-full bg-[#1c1c1c] px-10 py-7">
      <Header logdata={props.logdata} userLogout={props.userLogout} />
      <Numbers logdata={props.logdata} />
      <TaskList logdata={props.logdata} />
    </div>
  );
};

export default EmployeeDashbord;
