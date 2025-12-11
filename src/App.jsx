import './styles/index.css'
import { RageRoom } from './components/RageRoom'
import './styles/App.css';
import { ShapeContext } from './utils/context.jsx';
import React from 'react';

function App() {
  const [selectedShape, setSelectedShape] = React.useState(null);
  return (
    <ShapeContext.Provider value={{ selectedShape, setSelectedShape }}>
      <RageRoom />
    </ShapeContext.Provider>
  );
}

export default App;
