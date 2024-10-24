import { useState, useEffect } from 'react';

export const useDebounce = (cb: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(cb);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(cb);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, delay]);

  return debouncedValue;
};