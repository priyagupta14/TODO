import React from 'react';
import TaskInput from '../component/Task/TaskInput';
import TaskList from '../component/Task/TaskList';
import SearchBar from '../component/SearchBar/SearchBar';
import FilterButtons from '../component/FilterButtons/FilterButtons';

function HomePage() {
  return (
    <div className="w-[80%]">
      <div className='flex justify-between items-center mb-2 flex-wrap gap-y-2 md:gap-y-0'>
        <h1 className='flex-[0_0_20%] text-3xl font-bold'>Today</h1>
        <SearchBar />
        <FilterButtons />
      </div>

      <TaskList />
      <TaskInput />
    </div>
  );
}

export default HomePage;
