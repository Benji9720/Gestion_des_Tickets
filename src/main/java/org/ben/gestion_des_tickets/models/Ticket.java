package org.ben.gestion_des_tickets.models;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "tickets")
@Data
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private String description;

    @Enumerated(EnumType.STRING)
    private Statut statut;

    @Enumerated(EnumType.STRING)
    private Priorite priorite;

    private LocalDateTime dateCreation;

    private LocalDateTime dateMiseAJour;

    @ManyToOne
    @JoinColumn(name = "id_employe")
    private User employe;

    @ManyToOne
    @JoinColumn(name = "id_technicien", nullable = true)
    private User technicien;

    public enum Statut {
        OUVERT, EN_COURS, RESOLU, FERME
    }

    public enum Priorite {
        FAIBLE, MOYENNE, ELEVEE, CRITIQUE
    }
}
