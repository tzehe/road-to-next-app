import {Suspense} from "react";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/TicketList";

const TicketsPage = () => {
    return (
        <>
            <h2 className="text-2xl">Tickets Page</h2>
            <div>Here are your current Ticket List:</div>
            <Suspense fallback={<Spinner />}>
                <TicketList/>
            </Suspense>
        </>

    )
}


export default TicketsPage