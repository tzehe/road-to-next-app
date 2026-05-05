import type {Route} from "next";
import Link from "next/link";
import {initialTickets} from "@/data";
import {ticketPath} from "@/paths";

const TicketsPage = () => (
    <div>
        <h2 className="text-2xl">Tickets Page</h2>
        {initialTickets.map((ticket) => (
            <div key={ticket.id}>
                <Link href={ticketPath(ticket.id) as Route}>{ticket.title}</Link>
            </div>)
        )}


    </div>
)

export default TicketsPage