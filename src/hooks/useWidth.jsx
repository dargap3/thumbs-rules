import { useState, useEffect } from 'react';

const useWidth = () => {
  const [ width, setWidth ] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
    return () => {
      window.removeEventListener('resize', handleResize); // componentWillUnMount
    }
  }, [width]);
  return width;
};

export default useWidth;