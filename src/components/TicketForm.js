import React, { useState } from 'react';
import { db, auth } from '../firebase.js'; // Updated import path with .js extension
import { collection, addDoc } from 'firebase/firestore';

function TicketForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'tickets'), {
        title,
        description,
        createdAt: new Date(),
        userId: auth.currentUser.uid,
      });
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TicketForm;
