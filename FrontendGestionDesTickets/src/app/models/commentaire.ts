import {Ticket} from './ticket';
import {User} from './user';

export interface Commentaire {
  id?: number;
  commentaire: string;
  ticket: Ticket;
  user: User;
  dateCreation: string;
}
