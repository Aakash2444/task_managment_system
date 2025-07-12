import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="mt-10 flex justify-between gap-3 screen">
      <div className="w-[45%] bg-red-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="w-[45%] bg-blue-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="w-[45%] bg-green-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="w-[45%] bg-yellow-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
