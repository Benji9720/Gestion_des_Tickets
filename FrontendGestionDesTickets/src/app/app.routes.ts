import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { CommentaireListComponent } from './components/commentaire-list/commentaire-list.component';
import { CommentaireFormComponent } from './components/commentaire-form/commentaire-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AuthGuard} from './components/guards/auth.guard';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'users/new', component: UserFormComponent, canActivate: [AuthGuard] },
  { path: 'tickets', component: TicketListComponent, canActivate: [AuthGuard] },
  { path: 'tickets/new', component: TicketFormComponent, canActivate: [AuthGuard] },
  { path: 'commentaires', component: CommentaireListComponent, canActivate: [AuthGuard] },
  { path: 'commentaires/new', component: CommentaireFormComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];
