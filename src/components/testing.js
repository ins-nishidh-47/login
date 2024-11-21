// // import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { useEffect, useState } from "react";

// // function Counter() {
// //   const [count, setCount] = useState(0);
// //   const [calculation, setCalculation] = useState(0);

// //   useEffect(() => {
// //     setCalculation(() => count * 2);
// //   }, [count]); // <- add the count variable here

// //   return (
// //     <>
// //       <p>Count: {count}</p>
// //       <button onClick={() => setCount((c) => c + 1)}>+</button>
// //       <p>Calculation: {calculation}</p>
// //     </>
// //   );
// // }


// // export default Counter;

// function Counter(){
//     const [count, setCount] = useState(0);
//     const [Calculation, setCalculation] = useState(0);

//     useEffect(()=>{
//         setCalculation(()=> count * 2 );
//     },[count]);

//     return (
//         <>
//         <p> "Count" : {count} </p>
//         <button onClick={()=> setCount((c)=> c + 1) }>+</button>
//         <p>Calculation: {Calculation}</p>
//         </>

//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);

// export default Counter
import React from "react";


const Testing = () => {
  alert("Chutiya mujhe hi kui pareshan krta ha")

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h1>
        <p className="text-gray-600">Username: {username}</p>
        <p className="text-gray-600">Password: {password}</p>
      </div>
    </div>
  );
};

export default Testing;
