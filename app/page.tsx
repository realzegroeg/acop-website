import { useState } from 'react';

export default function Home() {
  const [circles, setCircles] = useState([
    // Initial circles
    { x: 100, y: 150, radius: 30, color: '#f08080' }, 
    { x: 200, y: 220, radius: 50, color: '#ffb6c1' }, 
    { x: 150, y: 280, radius: 40, color: '#ffa07a' }, 
  ]);

  const handleAddCircle = () => {
    // Generate random position and size for new circle
    const newCircle = {
      x: Math.random() * 300 + 50, // Random x position
      y: Math.random() * 300 + 100, // Random y position
      radius: Math.random() * 40 + 10, // Random radius between 10 and 50
      color: `hsl(${Math.random() * 360}, 50%, 50%)` // Random color
    };

    setCircles([...circles, newCircle]); // Add new circle to the array
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="mb-4">ACoP&apos;s AWESOME TOOLBOX TO SUCCESS</h1>
      <div className="relative w-full max-w-md" style={{ position: 'relative' }}>
        {/* Toolbox Shape (Rectangle) */}
        <div className="bg-gray-300 rounded-lg p-4 shadow-md" style={{ height: '200px' }}>
          {/* Handle for Toolbox */}
          <div className="bg-gray-500 rounded-full w-6 h-6 absolute top-2 left-1/2 transform -translate-x-1/2" />
        </div>

        {/* Circles (Buttons) coming out of the Toolbox */}
        {circles.map((circle, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: circle.x,
              top: circle.y,
              width: circle.radius * 2,
              height: circle.radius * 2,
              borderRadius: '50%',
              backgroundColor: circle.color,
              cursor: 'pointer'
            }}
          />
        ))}
      </div>

      <button onClick={handleAddCircle} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Add Circle
      </button>
    </main>
  );
}
