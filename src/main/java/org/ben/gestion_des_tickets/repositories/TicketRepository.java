package org.ben.gestion_des_tickets.repositories;

import org.ben.gestion_des_tickets.models.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByStatut(Ticket.Statut statut);
}