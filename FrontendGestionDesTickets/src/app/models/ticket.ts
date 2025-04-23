import {User} from './user';

export interface Ticket {
  id?: number;
  titre: string;
  description: string;
  statut: 'OUVERT' | 'EN_COURS' | 'RESOLU' | 'FERME';
  priorite: 'BASSE' | 'MOYENNE' | 'HAUTE';
  createur: User;
  technicien?: User;
  dateCreation: string;
  dateMiseAJour?: string;
}
