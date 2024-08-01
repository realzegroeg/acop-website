'use client'

import React from 'react';

const Picture = () => {
  return (
    <div className="picture-container"> 
      <div 
        className="shape rectangle"
        style={{
          position: 'absolute',
          left: '50%',
          top: '85%', 
          transform: 'translateX(-50%)',
          width: '130px', 
          height: '65px', 
        }}
      ></div>

      {/* Circle 1 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '15%', 
          top: '10%', 
          width: '12vw', 
          height: '12vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 1 clicked!');
        }}
      >
      </button>

      {/* Circle 2 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '65%', 
          top: '5%', 
          width: '10vw', 
          height: '10vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 2 clicked!');
        }}
      >
      </button>

      {/* Circle 3 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '35%', 
          top: '25%', 
          width: '11vw', 
          height: '11vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 3 clicked!');
        }}
      >
      </button>

      {/* Circle 4 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '25%', 
          top: '5%', 
          width: '8vw', 
          height: '8vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 4 clicked!');
        }}
      >
      </button>

      {/* Circle 5 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '75%', 
          top: '15%', 
          width: '9vw', 
          height: '9vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 5 clicked!');
        }}
      >
      </button>

      {/* Circle 6 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '55%', 
          top: '35%', 
          width: '8.5vw', 
          height: '8.5vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 6 clicked!');
        }}
      >
      </button>

      {/* Circle 7 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '20%', 
          top: '30%', 
          width: '9.5vw', 
          height: '9.5vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 7 clicked!');
        }}
      >
      </button>

      {/* Circle 8 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '30%', 
          top: '20%', 
          width: '8.8vw', 
          height: '8.8vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 8 clicked!');
        }}
      >
      </button>

      {/* Circle 9 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '55%', 
          top: '20%', 
          width: '9.2vw', 
          height: '9.2vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 9 clicked!');
        }}
      >
      </button>

      {/* Circle 10 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '65%', 
          top: '30%', 
          width: '10vw', 
          height: '10vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 10 clicked!');
        }}
      >
      </button>

      {/* Circle 11 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '40%', 
          top: '0%', 
          width: '11vw', 
          height: '11vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 11 clicked!');
        }}
      >
      </button>

      {/* Circle 12 */}
      <button 
        className="shape circle"
        style={{
          position: 'absolute',
          left: '75%', 
          top: '5%', 
          width: '7vw', 
          height: '7vw', 
          borderRadius: '50%',
          backgroundColor: '#FFD700', 
          border: 'none', 
          cursor: 'pointer', 
        }}
        onClick={() => {
          console.log('Circle 12 clicked!');
        }}
      >
      </button>
    </div>
  );
};

export default Picture;
