import React from 'react';

const ToolBox = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="h-screen overflow-hidden bg-white">
      <svg width="100%" height="100%">
        <rect 
          x={(windowWidth - 100) / 2} // Center horizontally
          y={windowHeight * 0.9} // 90% of the screen height from the top
          width={100}
          height={50}
          fill="blue"  
        />
      </svg>
    </div>
  );
};

export default ToolBox;
