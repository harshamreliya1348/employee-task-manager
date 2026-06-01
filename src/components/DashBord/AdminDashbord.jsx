import AllTask from "../Others.jsx/AllTask";
import CreateTask from "../Others.jsx/CreateTask";
import Header from "../Others.jsx/Header";

const AdminDashbord = (props) => {
  return (
    <div className="bg-black h-auto w-full px-10 py-7">
      <Header logdata={props.logdata} userLogout={props.userLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashbord;
