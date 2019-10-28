import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { empsService } from './services/emps.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ empsService]
})
export class AppComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen  = !this.navbarOpen;
  }

}
