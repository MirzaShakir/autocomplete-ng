import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatAutocomplete, MatInputModule, MatSelectModule, MatSelect } from '@angular/material'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DecrypterComponent } from './decrypter/decrypter.component';
import { ConfigreaderComponent } from './configreader/configreader.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DecrypterComponent,
    ConfigreaderComponent,
    AdvertisersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
