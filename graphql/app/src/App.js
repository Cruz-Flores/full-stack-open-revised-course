// import React from 'react';
// import { gql, useQuery } from '@apollo/client';

// const ALL_PERSONS = gql`
//   query {
//     allPersons {
//       name
//       phone
//       id
//     }
//   }
// `;

// const Persons = ({ persons }) => {
//   return (
//     <div>
//       <h2>Persons</h2>
//       {persons.map((p) => (
//         <div key={p.name}>
//           {p.name} {p.phone}
//         </div>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   const result = useQuery(ALL_PERSONS);

//   if (result.loading) {
//     return <div>loading...</div>;
//   }

//   return <Persons persons={result.data.allPersons} />;
// };

// export default App;

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import { useQuery } from '@apollo/client';
import { ALL_PERSONS } from './queries';
import { useState } from 'react';
import PhoneForm from './components/PhoneForm';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  // realiza la consulta repetidamente, ver otra solucion en usemutatio en
  //PersonForm
  // const result = useQuery(ALL_PERSONS, {
  //   pollInterval: 2000,
  // });

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 2000);
  };

  const result = useQuery(ALL_PERSONS);

  if (result.loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Notify errorMessage={errorMessage} />
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={notify} />
      <PhoneForm setError={notify} />
    </>
  );
};

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }
  return <div style={{ color: 'red' }}>{errorMessage}</div>;
};

export default App;
