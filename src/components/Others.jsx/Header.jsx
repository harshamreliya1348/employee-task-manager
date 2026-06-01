const Header = (props) => {

  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.userLogout("");
  };

  return (
    <div className="text-white flex justify-between ">
      <h1 className="text-semibold">
        Hello,
        <br />
        <span className="text-3xl font-semibold">
          {props.logdata.firstName}👋
        </span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-800 active:scale-95 font-bold px-3 cursor-pointer rounded"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
