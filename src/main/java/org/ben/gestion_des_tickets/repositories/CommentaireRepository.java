package org.ben.gestion_des_tickets.repositories;

import org.ben.gestion_des_tickets.models.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentaireRepository extends JpaRepository<Commentaire, Long> {
    List<Commentaire> findByTicketId(Long ticketId);
}
