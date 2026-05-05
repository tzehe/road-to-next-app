import {initialTickets} from '@/data';
import {Button} from "@/components/ui/button";

type TicketPageProps = {
    params: Promise<{ ticketId: string }>

}

const TICKET_ICONS = {
    DONE: 'X',
    IN_PROGRESS: '>',
    BLOCKED: '-',
    OPEN: 'O'
}

const TicketPage = async ({params}: TicketPageProps) => {
    const {ticketId} = await params;
    const ticket = initialTickets.find(t => t.id === ticketId);

    if (!ticket) {
        return (<div>No available tickets</div>)
    }

    return (
        <div>
            <h2 className='text-lg'>Tickets Page</h2>
            <p>Ticket Nr: {ticket.id}</p>
            <p>Status: {TICKET_ICONS[ticket.status]}</p>
            <Button variant="outline">Button</Button>
        </div>
    )
}

export default TicketPage;