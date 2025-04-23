import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../../services/commentaire.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Commentaire} from '../../models/commentaire';

@Component({
  selector: 'app-commentaire-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './commentaire-list.component.html',
  styleUrls: ['./commentaire-list.component.css']
})
export class CommentaireListComponent implements OnInit {
  commentaires: Commentaire[] = [];

  constructor(private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.commentaireService.getCommentaires().subscribe(commentaires => {
      this.commentaires = commentaires;
    });
  }
}
