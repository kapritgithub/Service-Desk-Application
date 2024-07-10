import React, { useEffect, useState } from 'react';
import { db } from '../firebase.js'; // Updated import path with .js extension
import { collection, getDocs } from 'firebase/firestore';

function AdminDashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const querySnapshot = await getDocs(collection(db, 'tickets'));
      setTickets(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {tickets.map(ticket => (
        <div key={ticket.id}>
          <h2>{ticket.title}</h2>
          <p>{ticket.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
