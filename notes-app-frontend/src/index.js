import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// desestructuracion//
// const Hello = ({ name, age }) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - age;
//   };

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = 'Peter';
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

// estado //
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   setTimeout(() => setCounter(counter + 1), 1000);

//   console.log('rendering...', counter);

//   return <div>{counter}</div>;
// };

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button>
//   )
// }

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
