import React, { useState } from 'react';

const Status = () => {
  const [color, setColor] = useState("this is the initial state");
  const [preColor, setPreColor] = useState("second state");

  const swapColors = () => {
    let temp = color;
    setColor(preColor);
    setPreColor(temp);
  };

  setTimeout(() => {
    document.getElementById("demo").innerHTML = color;
  }, 2000);
  return (
    <>  
      <div className="m-5 p-5 border-2 border-black rounded-lg bg-gray-100 text-gray-800 text-center ">
        <div>Current color: {color}</div>
        <div>Previous color: {preColor}</div>
        <button 
          className="px-5 py-2 mt-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={swapColors}
        >
          Swap Colors
        </button>
      </div>
      <div className='mt-10 p-5 border border-gray-700'>
          <h2 id='demo'></h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
          <h2>My name is wasif ali</h2>
      </div>
    </>
  );
};

export default Status;
