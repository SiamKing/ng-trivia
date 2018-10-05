import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { SetupDialogComponent } from './dialog/setup-dialog/setup-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlayComponent } from './play/play.component';
import { QuestionDialogComponent } from './dialog/question-dialog/question-dialog.component';
import { HtmlDecoderPipe } from './shared/html-decoder.pipe';
import { ScoreDialogComponent } from './dialog/score-dialog/score-dialog.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SetupDialogComponent, QuestionDialogComponent, ScoreDialogComponent]
})
export class AppModule { }
