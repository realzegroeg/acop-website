import React, { useState, useEffect } from 'react';

type Shape = {
  type: 'rect' | 'line';
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
};

const ToolBox = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedTool, setSelectedTool] = useState<'rect' | 'line' | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentShape, setCurrentShape] = useState<Shape | null>(null);
  const [generatedCode, setGeneratedCode] = useState('');

  useEffect(() => {
    const generateCode = () => {
      let html = '<div>';
      shapes.forEach((shape) => {
        if (shape.type === 'rect') {
          html += `<div 
                    style="position: absolute;
                           left: ${shape.x}px;
                           top: ${shape.y}px;
                           width: ${shape.width}px;
                           height: ${shape.height}px;
                           background-color: ${shape.color};"
                  ></div>`;
        } else if (shape.type === 'line') {
          // TODO: Implement line code generation
          // You'll likely need to calculate the line's angle and use CSS transforms
        }
      });
      html += '</div>';
      setGeneratedCode(html);
    };
    generateCode();
  }, [shapes]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.target as HTMLDivElement;
    const x = e.clientX - rect.offsetLeft;
    const y = e.clientY - rect.offsetTop;

    if (selectedTool === 'rect') {
      setIsDrawing(true);
      setCurrentShape({
        type: 'rect',
        x,
        y,
        width: 0,
        height: 0,
        color: '#000000', // Default color
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrawing && currentShape) {
      const rect = e.target as HTMLDivElement;
      const x = e.clientX - rect.offsetLeft;
      const y = e.clientY - rect.offsetTop;

      setCurrentShape((prevShape) => ({
        ...prevShape,
        width: x - prevShape.x,
        height: y - prevShape.y,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    if (currentShape) {
      setShapes([...shapes, currentShape]);
      setCurrentShape(null);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-white flex flex-col items-center">
      <div
        className="w-full h-full relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {shapes.map((shape, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              width: shape.width,
              height: shape.height,
              backgroundColor: shape.color,
            }}
          />
        ))}
      </div>

      <div className="mt-4">
        <button onClick={() => setSelectedTool('rect')}>Rectangle</button>
        <button onClick={() => setSelectedTool('line')}>Line</button>
        <button onClick={() => setSelectedTool(null)}>Select</button>
      </div>

      <div className="mt-4">
        <h2>Generated Code:</h2>
        <pre>{generatedCode}</pre>
      </div>
    </div>
  );
};

export default ToolBox;
