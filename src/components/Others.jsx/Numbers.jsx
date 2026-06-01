const Numbers = ({ logdata }) => {
  return (
    <div className="flex gap-4 mt-15 lg:flex-nowrap flex-wrap">
      <div className="bg-red-500 w-[47%] px-5 py-4 text-white rounded-xl">
        <h2 className="text-3xl font-bold">{logdata.taskNumber.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="bg-green-500 w-[47%] px-5 py-4 text-white rounded-xl">
        <h2 className="text-3xl font-bold">
          {logdata.taskNumber.completedTask}
        </h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="bg-blue-500 w-[47%] px-5 py-4 text-white rounded-xl">
        <h2 className="text-3xl font-bold">{logdata.taskNumber.failedTask}</h2>
        <h3 className="text-xl font-semibold">Faild Task</h3>
      </div>
      <div className="bg-orange-500 w-[47%] px-5 py-4 text-white rounded-xl">
        <h2 className="text-3xl font-bold">{logdata.taskNumber.active}</h2>
        <h3 className="text-xl font-semibold">Active Task</h3>
      </div>
    </div>
  );
};

export default Numbers;
