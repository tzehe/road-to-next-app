import {getTickets} from "@/features/ticket/queries";
import TicketItem from "@/features/ticket/TicketItem";

const TicketList = async () => {
    const tickets = await getTickets();
    return (
        <ul>
            {tickets?.map((ticket) => (<TicketItem key={ticket.id} {...ticket} />)
            )}
        </ul>
    );
}

export default TicketList;