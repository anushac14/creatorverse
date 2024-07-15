

import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';
import Main from './pages/Main';

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Main /> },
    { path: "/all-creators", element: <ShowCreators /> },
    { path: "/add", element: <AddCreator /> },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
  ]);
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;

