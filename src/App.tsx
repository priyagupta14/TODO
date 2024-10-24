import React, { useState } from 'react';
import { TasksProvider, useTasks } from './context/TasksContext';
import HomePage from './screens/HomePage';

const App: React.FC = () => {
  return (
    <TasksProvider>
      <div className="app flex justify-center">
        <HomePage/>
      </div>
    </TasksProvider>
  );
};

export default App;
