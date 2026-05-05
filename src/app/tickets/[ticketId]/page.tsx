import {notFound} from "next/navigation";
import {Button} from "@/components/ui/button";
import {getTicket} from "@/features/ticket/queries";

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
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound();
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