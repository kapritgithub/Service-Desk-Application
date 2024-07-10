// src/components/PrivateRoute.js

import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js'; // Adjust the path if necessary

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={currentUser ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
