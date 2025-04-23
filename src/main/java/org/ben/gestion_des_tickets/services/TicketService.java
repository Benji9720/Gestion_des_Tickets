package org.ben.gestion_des_tickets.services;

import org.ben.gestion_des_tickets.models.Ticket;
import org.ben.gestion_des_tickets.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    public Ticket createTicket(Ticket ticket) {
        ticket.setStatut(Ticket.Statut.OUVERT);
        ticket.setDateCreation(LocalDateTime.now());
        ticket.setDateMiseAJour(LocalDateTime.now());
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getOpenTickets() {
        return ticketRepository.findByStatut(Ticket.Statut.OUVERT);
    }

    public Ticket updateTicket(Long id, Ticket ticketDetails) {
        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket non trouvé"));
        ticket.setTitre(ticketDetails.getTitre());
        ticket.setDescription(ticketDetails.getDescription());
        ticket.setStatut(ticketDetails.getStatut());
        ticket.setPriorite(ticketDetails.getPriorite());
        ticket.setTechnicien(ticketDetails.getTechnicien());
        ticket.setDateMiseAJour(LocalDateTime.now());
        return ticketRepository.save(ticket);
    }
}