export interface User {
  id?: number;
  nom: string;
  email: string;
  motDePasse: string;
  role: 'EMPLOYE' | 'TECHNICIEN' | 'ADMIN';
  dateInscription: string;
}
