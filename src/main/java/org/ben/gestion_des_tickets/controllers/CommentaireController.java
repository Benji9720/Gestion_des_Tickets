package org.ben.gestion_des_tickets.controllers;

import org.ben.gestion_des_tickets.models.Commentaire;
import org.ben.gestion_des_tickets.services.CommentaireService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/commentaires")
public class CommentaireController {

    private final CommentaireService commentaireService;

    public CommentaireController(CommentaireService commentaireService) {
        this.commentaireService = commentaireService;
    }

    @GetMapping
    public ResponseEntity<List<Commentaire>> getAllCommentaires() {
        System.out.println("Tentative d'accès à getAllCommentaires");
        try {
            List<Commentaire> commentaires = commentaireService.getAllCommentaires();
            System.out.println("Nombre de commentaires trouvés : " + commentaires.size());
            return ResponseEntity.ok(commentaires);
        } catch (Exception e) {
            System.out.println("Erreur dans getAllCommentaires : " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<Commentaire> getCommentaireById(@PathVariable Long id) {
        return ResponseEntity.ok(commentaireService.getCommentaireById(id)
                .orElseThrow(() -> new RuntimeException("Commentaire not found")));
    }

    @PostMapping
    public ResponseEntity<Commentaire> createCommentaire(@RequestBody Commentaire commentaire) {
        return ResponseEntity.ok(commentaireService.createCommentaire(commentaire));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Commentaire> updateCommentaire(@PathVariable Long id, @RequestBody Commentaire commentaire) {
        Commentaire existingCommentaire = commentaireService.getCommentaireById(id)
                .orElseThrow(() -> new RuntimeException("Commentaire not found"));

        if (commentaire.getCommentaire() == null || commentaire.getCommentaire().trim().isEmpty()) {
            throw new IllegalArgumentException("Le contenu du commentaire ne peut pas être vide");
        }

        existingCommentaire.setCommentaire(commentaire.getCommentaire());
        return ResponseEntity.ok(commentaireService.createCommentaire(existingCommentaire));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommentaire(@PathVariable Long id) {
        Commentaire commentaire = commentaireService.getCommentaireById(id)
                .orElseThrow(() -> new RuntimeException("Commentaire not found"));
        commentaireService.deleteCommentaire(id);
        return ResponseEntity.noContent().build();
    }
}