import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './NotFound';


function App() {
  const getProtectedRoute = (Component, specificRoles = null) => {
    const allowedRoles = specificRoles || ['admin'];
    return (
      <ProtectedRoute allowedRoles={allowedRoles}>
        <Component />
      </ProtectedRoute>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;