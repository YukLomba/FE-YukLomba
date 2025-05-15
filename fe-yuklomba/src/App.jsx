import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './NotFound';
import TestComponent from './TestComponent';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUp';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/test' element={<TestComponent/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;