import { DecrypterComponent } from './decrypter/decrypter.component';
import { ConfigreaderComponent } from './configreader/configreader.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'decrypter', component: DecrypterComponent },
  { path: 'confReader', component: ConfigreaderComponent },
  { path: 'advertisers', component: AdvertisersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
