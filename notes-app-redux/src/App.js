import { useEffect } from 'react';
import { Notes } from './components/Notes';
import { NewNote } from './components/Newnote';
import { VisibilityFilter } from './components/VisibilityFilter';
import { useDispatch } from 'react-redux';
import { initializeNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
