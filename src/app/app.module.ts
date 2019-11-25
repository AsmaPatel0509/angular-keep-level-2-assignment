import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeaderComponent} from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { AuthenticationService } from './services/authentication.service';
import { NotesService } from './services/notes.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterService } from './services/router.service';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  canActivate: [CanActivateRouteGuard]},
  {path: 'login', component:  LoginComponent },
  { path: 'dashboard', component: DashboardComponent }];


@NgModule({
  declarations: [ HeaderComponent, AppComponent, DashboardComponent, LoginComponent],
  imports: [ MatToolbarModule,
    MatExpansionModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule, 
    RouterModule.forRoot(routes),
    MatPaginatorModule
  ],
  providers: [ AuthenticationService, CanActivateRouteGuard, NotesService, RouterService],
  exports: [RouterModule],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
