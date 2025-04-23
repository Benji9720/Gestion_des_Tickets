import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: Partial<User> = {
    nom: '',
    email: '',
    motDePasse: '',
    role: 'EMPLOYE',
    dateInscription: new Date().toISOString()
  };
  roles: ('EMPLOYE' | 'TECHNICIEN' | 'ADMIN')[] = ['EMPLOYE', 'TECHNICIEN', 'ADMIN'];

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(): void {
    const userToSubmit: User = {
      nom: this.user.nom!,
      email: this.user.email!,
      motDePasse: this.user.motDePasse!,
      role: this.user.role as 'EMPLOYE' | 'TECHNICIEN' | 'ADMIN',
      dateInscription: this.user.dateInscription!
    };

    this.userService.createUser(userToSubmit).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
