import React, { useRef, useEffect } from 'react';

export default function usePrevious(value) {
  const previous = useRef(0);
  useEffect(() => {
    previous.current = value;
  }, [value]);
  return previous.current;
}
