import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashbord from "./components/DashBord/AdminDashbord";
import EmployeeDashbord from "./components/DashBord/EmployeeDashbord";
import { getLocalStorageData, setLocalStorageData } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   setLocalStorageData();
  //   getLocalStorageData();
  // }, []);
  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorageData();
    }

    getLocalStorageData();
  }, []);
  const [userDatas, setUserDatas] = useContext(AuthContext);

  const [logedinUserData, setLogedinUserData] = useState(null);
  const [user, setUser] = useState(null);

  // localStorage.clear();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLogedinUserData(userData.data);
    }
  }, []);

  const userHandler = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: userDatas.admin[0] }),
      );
      setLogedinUserData(userDatas.admin[0]);
    } else if (userDatas) {
      const employees = userDatas.employees.find(
        (e) => e.email == email && e.password == password,
      );
      if (employees) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employees }),
        );

        setLogedinUserData(employees);
      }
    } else {
      alert("Invalid Valid Credetials !");
    }
  };
  return (
    <>
      {!user ? <Login userHandler={userHandler} /> : ""}
      {user == "admin" ? (
        <AdminDashbord logdata={logedinUserData} userLogout={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashbord
          logdata={JSON.parse(localStorage.getItem("employees"))?.find(
            (emp) => emp.email === logedinUserData?.email,
          )}
          userLogout={setUser}
        />
      ) : null}
    </>
  );
};

export default App;
