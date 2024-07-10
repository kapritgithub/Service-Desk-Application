// src/tickets.js
import { db, auth } from "./firebase.js";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const createTicket = async () => {
    const description = document.getElementById('ticket-description').value;
    const priority = document.getElementById('ticket-priority').value;
    const category = document.getElementById('ticket-category').value;
    const userId = auth.currentUser.uid;
    
    try {
        await addDoc(collection(db, "tickets"), {
            description,
            priority,
            category,
            userId,
            status: "open",
            createdAt: new Date()
        });
        alert("Ticket created successfully");
        loadTickets();
    } catch (error) {
        alert(error.message);
    }
};

const loadTickets = async () => {
    const userId = auth.currentUser.uid;
    const q = query(collection(db, "tickets"), where("userId", "==", userId));
    
    const querySnapshot = await getDocs(q);
    const ticketsList = document.getElementById('tickets');
    ticketsList.innerHTML = '';
    
    querySnapshot.forEach((doc) => {
        const ticket = doc.data();
        const listItem = document.createElement('li');
        listItem.textContent = `${ticket.description} - ${ticket.priority} - ${ticket.category} - ${ticket.status}`;
        ticketsList.appendChild(listItem);
    });
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        loadTickets();
    }
});

window.createTicket = createTicket;
