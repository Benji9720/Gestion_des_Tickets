import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Ticket} from '../../models/ticket';
import {User} from '../../models/user';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  ticket: Partial<Ticket> = {
    titre: '',
    description: '',
    statut: 'OUVERT',
    priorite: 'BASSE',
    createur: {} as User,
    dateCreation: new Date().toISOString()
  };
  users: User[] = [];
  statuts: ('OUVERT' | 'EN_COURS' | 'RESOLU' | 'FERME')[] = ['OUVERT', 'EN_COURS', 'RESOLU', 'FERME'];
  priorites: ('BASSE' | 'MOYENNE' | 'HAUTE')[] = ['BASSE', 'MOYENNE', 'HAUTE'];

  constructor(
    private ticketService: TicketService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      if (users.length > 0) {
        this.ticket.createur = users[0];
      }
    });
  }

  onSubmit(): void {
    const ticketToSubmit: Ticket = {
      titre: this.ticket.titre!,
      description: this.ticket.description!,
      statut: this.ticket.statut as 'OUVERT' | 'EN_COURS' | 'RESOLU' | 'FERME',
      priorite: this.ticket.priorite as 'BASSE' | 'MOYENNE' | 'HAUTE',
      createur: this.ticket.createur!,
      dateCreation: this.ticket.dateCreation!
    };

    this.ticketService.createTicket(ticketToSubmit).subscribe(() => {
      this.router.navigate(['/tickets']);
    });
  }
}
