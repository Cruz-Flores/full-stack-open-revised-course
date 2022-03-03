// import { useLazyQuery, gql } from '@apollo/client';
// import { useState, useEffect } from 'react';

// const FIND_PERSON = gql`
//   query findPersonByName($nameToSearch: String!) {
//     findPerson(name: $nameToSearch) {
//       name
//       phone
//       id
//       address {
//         street
//         city
//       }
//     }
//   }
// `;

// const Persons = ({ persons }) => {
//   const [getPerson, result] = useLazyQuery(FIND_PERSON);
//   const [person, setPerson] = useState(null);

//   const showPerson = (name) => {
//     getPerson({ variables: { nameToSearch: name } });
//   };

//   console.log('result', result);

//   useEffect(() => {
//     if (result.data) {
//       setPerson(result.data.findPerson);
//     }
//   }, [result]);

//   if (person) {
//     return (
//       <div>
//         <h2> {persons.name}</h2>
//         <div>
//           {person.address.street} {person.address.city}
//         </div>
//         <div>{person.phone}</div>
//         <button onClick={() => setPerson(null)}>close</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Persons</h2>
//       {persons.map((p) => (
//         <div key={p.name}>
//           {p.name} {p.phone}
//           <button onClick={() => showPerson(p.name)}>show address</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Persons;

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FIND_PERSON } from '../queries';

const Person = ({ person, onClose }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <div>
        {person.address.street} {person.address.city}
      </div>
      <div>{person.phone}</div>
      <button onClick={onClose}>close</button>
    </div>
  );
};

const Persons = ({ persons }) => {
  const [nameToSearch, setNameToSearch] = useState(null);
  const result = useQuery(FIND_PERSON, {
    variables: { nameToSearch },
    //condicion para hacer la consulta
    skip: !nameToSearch,
  });

  if (nameToSearch && result.data) {
    return (
      <Person
        person={result.data.findPerson}
        onClose={() => setNameToSearch(null)}
      />
    );
  }

  return (
    <div>
      <h2>Persons</h2>
      {persons.map((p) => (
        <div key={p.name}>
          {p.name} {p.phone}
          <button onClick={() => setNameToSearch(p.name)}>show address</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
