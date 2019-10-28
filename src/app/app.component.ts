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
  title = 'The autocomplete example';

  searchTerm: FormControl = new FormControl();
  Users = <any>[];

  constructor( private service: empsService) {}

  ngOnInit () {
    this.searchTerm.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(
      term => {
        this.Users = <any>[];
        if( term != '' ) {
          this.service.search(term).subscribe(
            data => {
              this.Users = data as any[];
            }
          )
        }
      }
    )

  }

}
