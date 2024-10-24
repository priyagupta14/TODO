import React from 'react';
import { useTasks } from '../../context/TasksContext';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const { tasks, filter, searchTerm } = useTasks();

  const filteredTasks = tasks.filter(
    (task) =>
      task.text.indexOf(searchTerm) >= 0 &&
      (filter === 'all'
        ? true
        : filter === 'completed'
        ? task.completed
        : !task.completed)
  );
  return (
    <ul className="grid gap-y-2 mb-2">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
