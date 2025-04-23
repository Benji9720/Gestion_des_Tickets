import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../../services/commentaire.service';
import { UserService } from '../../services/user.service';
import { TicketService } from '../../services/ticket.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Commentaire} from '../../models/commentaire';
import {Ticket} from '../../models/ticket';
import {User} from '../../models/user';

@Component({
  selector: 'app-commentaire-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './commentaire-form.component.html',
  styleUrls: ['./commentaire-form.component.css']
})
export class CommentaireFormComponent implements OnInit {
  commentaire: Partial<Commentaire> = {
    commentaire: '',
    ticket: {} as Ticket,
    user: {} as User,
    dateCreation: new Date().toISOString()
  };
  users: User[] = [];
  tickets: Ticket[] = [];

  constructor(
    private commentaireService: CommentaireService,
    private userService: UserService,
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      if (users.length > 0) {
        this.commentaire.user = users[0];
      }
    });
    this.ticketService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
      if (tickets.length > 0) {
        this.commentaire.ticket = tickets[0];
      }
    });
  }

  onSubmit(): void {
    const commentaireToSubmit: Commentaire = {
      commentaire: this.commentaire.commentaire!,
      ticket: this.commentaire.ticket!,
      user: this.commentaire.user!,
      dateCreation: this.commentaire.dateCreation!
    };

    this.commentaireService.createCommentaire(commentaireToSubmit).subscribe(() => {
      this.router.navigate(['/commentaires']);
    });
  }
}
