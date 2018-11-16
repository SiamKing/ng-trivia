import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { SetupDialogComponent } from './dialog/setup-dialog/setup-dialog.component';
import { PlayComponent } from './play/play.component';
import { QuestionDialogComponent } from './dialog/question-dialog/question-dialog.component';
import { HtmlDecoderPipe } from './shared/html-decoder.pipe';
import { ScoreDialogComponent } from './dialog/score-dialog/score-dialog.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { environment } from '../environments/environment';
import { SetupComponent } from './setup/setup.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    SetupDialogComponent,
    PlayComponent,
    QuestionDialogComponent,
    HtmlDecoderPipe,
    ScoreDialogComponent,
    InstructionsComponent,
    SetupComponent,
    SignupComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SetupDialogComponent, QuestionDialogComponent, ScoreDialogComponent]
})
export class AppModule { }
