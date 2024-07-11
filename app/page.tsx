import React from 'react';

const ToolBox = () => {
  return (
    <div className="h-screen overflow-hidden bg-white">
      <iframe 
        className="figma-iframe" 
        width="800" 
        height="450" 
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQVSMCgC3XusaNBWDClp6uT%2FAPoC-Website-Design%3Fnode-id%3D1-2%26t%3DWGxEqpfQUSGtVAnx-1" 
        allowFullScreen={true} // Correct property name
      ></iframe>
    </div>
  );
};

export default ToolBox;
