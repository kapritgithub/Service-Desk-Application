import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig'; 
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './ViewTicket.css';

const ViewTicket = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'tickets'));
                const ticketsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTickets(ticketsData);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'tickets', id));
            setTickets(tickets.filter(ticket => ticket.id !== id));
            console.log('Ticket deleted successfully:', id);
        } catch (error) {
            console.error('Error deleting ticket:', error);
        }
    };

    return (
        <>
            <Box component="section" sx={{ p: 2, maxWidth: 500, margin: '0 auto', mt:1 }} className='containerBox'>
                {tickets.map((ticket) => (
                    <Box key={ticket.id} sx={{ p: 2, border: '2px solid gray', marginBottom: 2, borderRadius: 2 }} className='viewBoxTop'>
                        <Typography variant='body1'><strong>Description:</strong></Typography>
                        <Typography variant='body1' className='descriptionText'>{ticket.description}</Typography>
                        <Typography variant='body1' className='categoryText'><strong>Category:</strong> {ticket.category}</Typography>
                        <Typography variant='body1' className='priorityText'><strong>Priority:</strong> {ticket.priority}</Typography>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleDelete(ticket.id)}
                            sx={{ mt: 2 }}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            sx={{ mt: 2 }}
                        >
                            Track
                        </Button>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default ViewTicket;
