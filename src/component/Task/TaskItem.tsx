import React from 'react';
import { useTasks } from '../../context/TasksContext';
import { CiCircleRemove } from 'react-icons/ci';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri';
import classNames from 'classnames';

const TaskItem: React.FC<{
  task: { id: string; text: string; completed: boolean };
}> = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();
  return (
    <li
      className={classNames(
        ' border-[1px] rounded-lg h-12 flex justify-between items-center p-2',
        {
          'border-black': !task.completed,
          'border-lime-900 bg-lime-100': task.completed,
        }
      )}
    >
      <span className="flex items-center">
        <span onClick={() => toggleTask(task.id)} className="p-2">
          {!task.completed ? (
            <RiCheckboxBlankCircleLine />
          ) : (
            <RiCheckboxCircleLine />
          )}
        </span>
        <span>{task.text}</span>
      </span>

      <button onClick={() => deleteTask(task.id)}>
        <CiCircleRemove />
      </button>
    </li>
  );
};

export default TaskItem;
