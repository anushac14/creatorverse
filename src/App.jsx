import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </Router>
  );
};

export default App;
