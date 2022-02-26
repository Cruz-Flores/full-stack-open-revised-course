import React, { useState } from 'react';
import ReactDOM from 'react-dom';

////////////////////////////Complex state////////////////////////////

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>left</button>
//       <button onClick={() => setRight(right + 1)}>right</button>
//       {right}
//     </div>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//   });

//   //   const handleLeftClick = () => {
//   //     const newClicks = {
//   //       left: clicks.left + 1,
//   //       right: clicks.right,
//   //     };
//   //     setClicks(newClicks);
//   //   };

//   //   const handleRightClick = () => {
//   //     const newClicks = {
//   //       left: clicks.left,
//   //       right: clicks.right + 1,
//   //     };
//   //     setClicks(newClicks);
//   //   };

//   //   spread sintaxis

//   //   const handleLeftClick = () => {
//   //     const newClicks = {
//   //       ...clicks,
//   //       left: clicks.left + 1,
//   //     };
//   //     setClicks(newClicks);
//   //   };

//   //   const handleRightClick = () => {
//   //     const newClicks = {
//   //       ...clicks,
//   //       right: clicks.right + 1,
//   //     };
//   //     setClicks(newClicks);
//   //   };

//   //   without assign the object to a variable

//   const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

//   const handleRightClick = () =>
//     setClicks({ ...clicks, right: clicks.right + 1 });

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

////////////////////////////Handling arrays////////////////////////////

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'));
//     setLeft(left + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'));
//     setRight(right + 1);
//   };

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       {/* We call the join method on the allClicks array that joins all
//       the items into a single string, separated by the string passed as
//       the function parameter, which in our case is an empty space. */}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

////////////////////////////Conditional rendering////////////////////////////

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>;
//   }
//   return <div>button press history: {props.allClicks.join(' ')}</div>;
// };

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'));
//     setLeft(left + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'));
//     setRight(right + 1);
//   };

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text="left" />
//       <Button onClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

/////////////////////Function that returns a function/////////////////////////////////

// const App = () => {
//   const [value, setValue] = useState(10);

//   const hello = () => {
//     const handler = () => console.log('hello world');
//     return handler;
//   };

//   return (
//     <div>
//       {value}
//       {/* ATTENTION HERE  */}
//       <button onClick={hello()}>button</button>
//     </div>
//   );
// };

// const App = () => {
//   const [value, setValue] = useState(10);

//   // const hello = (who) => {
//   //   const handler = () => {
//   //     console.log('hello', who);
//   //   };
//   //   return handler;
//   // };

//   // const hello = (who) => {
//   //   return () => {
//   //     console.log('hello', who);
//   //   };
//   // };

//   // const hello = (who) =>
//   // () => {
//   //   console.log('hello', who)
//   // }

//   const hello = (who) => () => {
//     console.log('hello', who);
//   };

//   return (
//     <div>
//       {value}
//       <button onClick={hello('world')}>button</button>
//       <button onClick={hello('react')}>button</button>
//       <button onClick={hello('function')}>button</button>
//     </div>
//   );
// };

// const App = () => {
//   const [value, setValue] = useState(10);

//   const setToValue = (newValue) => () => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   );
// };

// const App = () => {
//   const [value, setValue] = useState(10);

//   const setToValue = (newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>thousand</button>
//       <button onClick={() => setToValue(0)}>reset</button>
//       <button onClick={() => setToValue(value + 1)}>increment</button>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

/////////////////Passing Event Handlers to Child Components/////////////////////

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {value}
      {/* se pasan tal cual al componente */}
      <Button
        handleClick={() => {
          setToValue(1000);
        }}
        text="thousand"
      />
      <Button
        handleClick={() => {
          setToValue(0);
        }}
        text="reset"
      />
      <Button
        handleClick={() => {
          setToValue(value + 1);
        }}
        text="increment"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
