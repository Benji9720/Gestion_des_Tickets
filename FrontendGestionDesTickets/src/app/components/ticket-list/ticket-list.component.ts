import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Ticket} from '../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
  }
}
