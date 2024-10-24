import React, { useState, useEffect } from 'react';
import { useTasks } from '../../context/TasksContext';
import { useDebounce } from '../../hooks/useDebounce';

const SearchBar: React.FC = () => {
  const [searchLocalTerm, setSearchLocalTerm] = useState('');
  const { setSearchTerm } = useTasks();
  const debouncedSearchTerm = useDebounce(searchLocalTerm, 300);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchTerm]);

  return (
    <input
      type="text"
      value={searchLocalTerm}
      onChange={(e) => setSearchLocalTerm(e.target.value)}
      placeholder="Search"
      className="border-black border-[1px] rounded-xl h-12 flex-[0_0_50%] min-w-[600px] md:min-w-max p-2"
    />
  );
};

export default SearchBar;
