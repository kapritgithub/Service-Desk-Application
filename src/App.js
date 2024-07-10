import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated to use Routes instead of Switch
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import TicketForm from './components/TicketForm.js';
import AdminDashboard from './components/AdminDashboard.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ticket" element={<TicketForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
