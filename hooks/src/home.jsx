import React, { useContext, useRef, useEffect } from 'react';
import { context as Context } from './index';

const Row = () => {
  const data = useContext(Context);

  const customElement = useRef(null);

  useEffect(() => {
    console.log(customElement.current);
  }, []);

  return (
    <div ref={customElement}>{data}</div>
  );
};

export default Row;
