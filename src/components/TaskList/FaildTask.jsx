const FaildTask = ({ elem }) => {
  return (
    <div className="shrink-0 rounded-xl h-full w-60 lg:w-63 bg-blue-600 p-3">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 font-bold p-1 rounded">{elem.category}</h2>
        <h4 className="font-bold">{elem.taskDate}</h4>
      </div>
      <div className="mt-5 ">
        <h2 className="text-2xl font-bold">{elem.taskTitle}</h2>
        <h3 className="font-semibold ml-2 mt-3">{elem.taskDescription}</h3>
      </div>
      <div className="mt-4 w-full ">
        <button className="bg-red-600 rounded active:scale-95 p-2 w-full font-bold">
          faild Task
        </button>
      </div>
    </div>
  );
};

export default FaildTask;
