import { useState } from 'react';
import NamePhoneForm from './components/NamePhoneForm';
import Filter from './components/Filter';
import Display from './components/Display';

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas'},
  ]);
  const [ newName, setNewName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ filter, setFilter ] = useState('');

  const displayPersons = persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setFilter={setFilter} />
      <NamePhoneForm setNewName={setNewName} setNumber={setNumber} setPersons={setPersons}
        persons={persons} newName={newName} number={number} />
      <Display displayPersons={displayPersons} />

    </div>
  );
};

export default App;