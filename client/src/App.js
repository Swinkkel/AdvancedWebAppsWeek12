import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBook from './components/CreateBook'
import ShowBook from './components/ShowBook'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateBook />} />
        <Route path="/book/:name" element={<ShowBook />} />
      </Routes>
    </Router>
  );
}

export default App;
