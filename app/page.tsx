'use client'

import React from 'react';

const Picture = () => {
  return (
    <div className="picture-container" style={{ backgroundColor: 'white' }}> 
      <div 
        className="shape rectangle"
        style={{
          position: 'absolute',
          left: '50%',
          top: '80%', // Slightly lower
          transform: 'translateX(-50%)',
          width: '110px', // Slightly wider
          height: '55px', // Slightly taller
          backgroundColor: '#808080', // Grey
        }}
      ></div>

      {/* Circle 1 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '20%', // Relative to the viewport width
          top: '15%', // Relative to the viewport height
          width: '7vw', // 7% of the viewport width
          height: '7vw', // 7% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 2 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '70%', // Relative to the viewport width
          top: '10%', // Relative to the viewport height
          width: '5vw', // 5% of the viewport width
          height: '5vw', // 5% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 3 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '40%', // Relative to the viewport width
          top: '30%', // Relative to the viewport height
          width: '6vw', // 6% of the viewport width
          height: '6vw', // 6% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 4 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '30%', // Relative to the viewport width
          top: '10%', // Relative to the viewport height
          width: '4vw', // 4% of the viewport width
          height: '4vw', // 4% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 5 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '75%', // Relative to the viewport width
          top: '20%', // Relative to the viewport height
          width: '5vw', // 5% of the viewport width
          height: '5vw', // 5% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 6 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '60%', // Relative to the viewport width
          top: '40%', // Relative to the viewport height
          width: '4.5vw', // 4.5% of the viewport width
          height: '4.5vw', // 4.5% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 7 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '25%', // Relative to the viewport width
          top: '30%', // Relative to the viewport height
          width: '5.5vw', // 5.5% of the viewport width
          height: '5.5vw', // 5.5% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 8 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '35%', // Relative to the viewport width
          top: '20%', // Relative to the viewport height
          width: '4.8vw', // 4.8% of the viewport width
          height: '4.8vw', // 4.8% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 9 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '60%', // Relative to the viewport width
          top: '25%', // Relative to the viewport height
          width: '5.2vw', // 5.2% of the viewport width
          height: '5.2vw', // 5.2% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 10 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '70%', // Relative to the viewport width
          top: '35%', // Relative to the viewport height
          width: '7vw', // 7% of the viewport width
          height: '7vw', // 7% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 11 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '45%', // Relative to the viewport width
          top: '5%', // Relative to the viewport height
          width: '8vw', // 8% of the viewport width
          height: '8vw', // 8% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

      {/* Circle 12 */}
      <div 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '80%', // Relative to the viewport width
          top: '10%', // Relative to the viewport height
          width: '4vw', // 4% of the viewport width
          height: '4vw', // 4% of the viewport width
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>

    </div>
  );
};

export default Picture;
