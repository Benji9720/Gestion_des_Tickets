import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Commentaire} from '../models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:8080/api/commentaires';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getCommentaire(id: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(this.apiUrl, commentaire, { headers: this.getHeaders() });
  }

  updateCommentaire(id: number, commentaire: Commentaire): Observable<Commentaire> {
    return this.http.put<Commentaire>(`${this.apiUrl}/${id}`, commentaire, { headers: this.getHeaders() });
  }

  deleteCommentaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
