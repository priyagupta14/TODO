import React, { useState } from 'react';
import { useTasks } from '../../context/TasksContext';

const TaskInput: React.FC = () => {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        className="border-black border-[1px] rounded-lg h-12 mb-2 p-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <button className="text-white bg-black rounded-lg h-12" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
