import {Route} from "next";
import Link from "next/link";
import {Ticket} from "@/features/ticket/types";
import {ticketPath} from "@/paths";

const TicketItem = ({id, title}: Ticket) => {
    console.log("Where Am I rendered?")
    return (
        <li key={id}>
            <Link href={ticketPath(id) as Route}>{title}</Link>
        </li>
    )
}

export default TicketItem