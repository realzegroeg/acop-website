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
          left: '70px',
          top: '120px',
          width: '70px', // Larger
          height: '70px', // Larger
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
          left: '300px', // Further right
          top: '100px', // Higher
          width: '50px', // Larger
          height: '50px', // Larger
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
          left: '195px', // Further right
          top: '210px',
          width: '60px', // Larger
          height: '60px', // Larger
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
          left: '150px',
          top: '90px',
          width: '40px', // Larger
          height: '40px', // Larger
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
          left: '350px', // Further right
          top: '150px', // Higher
          width: '50px', // Larger
          height: '50px', // Larger
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
          left: '270px', // Further right
          top: '245px',
          width: '45px', // Larger
          height: '45px', // Larger
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
          left: '120px',
          top: '200px',
          width: '55px', // Larger
          height: '55px', // Larger
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
          left: '165px',
          top: '145px',
          width: '48px', // Larger
          height: '48px', // Larger
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
          left: '270px', // Further right
          top: '170px',
          width: '52px', // Larger
          height: '52px', // Larger
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
          left: '335px',
          top: '220px',
          width: '70px', // Larger
          height: '70px', // Larger
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
          left: '210px',
          top: '70px',
          width: '80px', // Larger
          height: '80px', // Larger
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
          left: '370px', // Further right
          top: '90px',
          width: '40px', // Larger
          height: '40px', // Larger
          borderRadius: '50%',
          backgroundColor: '#FFD700', // Golden
        }}
      >
      </div>
      
    </div>
  );
};

export default Picture;
