import React from 'react';
import { useTasks } from '../../context/TasksContext';
import classNames from 'classnames';

const FilterButtons: React.FC = () => {
  const { filter, setFilter } = useTasks();
  const filterButtons= ['all', 'completed', 'incomplete'];
  return (
    <div className='gap-x-1 flex h-7 flex-[0_0_30%] justify-end'>
      {
        filterButtons.map((button)=>(
          <button
          onClick={() => setFilter(button)}
          className={classNames('text-white bg-slate-500 rounded-lg px-2 capitalize', {
            'bg-lime-600': filter === button,
            'bg-slate-500': filter !== button,
          })}
        >
          {button}
        </button>
        ))
      }

    </div>
  );
};

export default FilterButtons;
