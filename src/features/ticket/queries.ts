import {initialTickets} from "@/data";
import {Ticket} from "@/features/ticket/types";

export const getTickets = async (): Promise<Ticket[]> => {
    // delay for 2s
    await new Promise(resolve => setTimeout(resolve, 2000));
    return new Promise(resolve => resolve(initialTickets))
}

export const getTicket = async (ticketId: string): Promise<Ticket | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const maybeTicket = initialTickets.find(t => t.id === ticketId);
    return new Promise(resolve => resolve(maybeTicket));
}
