import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './NotFound';
import TestComponent from './TestComponent';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/test' element={<TestComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;