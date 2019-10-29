import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { empsService } from '../services/emps.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.css'],
  providers: [ empsService]
})
export class AdvertisersComponent implements OnInit {
  title = 'The autocomplete example';

  searchTerm: FormControl = new FormControl();
  searchEnv: FormControl = new FormControl();
  Users = <any>[];
  arrAdvertisers = <any>[];

  constructor( private service: empsService, private HttpService: HttpClient ) {}

  showAdvertisers(userid, environment) {
    const reqBody = {
			env: environment,
			userid: userid,
			product: 'all',
    };
    
    console.log( reqBody );
    return this.HttpService.post( 'http://localhost/mParlorApp/index.php/app_module/get_advertisers', reqBody)
    .subscribe(
      ( data: any ) => {
        console.log(data);
        this.arrAdvertisers = data.advertisers as any[];
      },
      err => console.log(err)
    );

    /*
    var allAdv = this.HttpService.post( 'http://localhost/mParlorApp/index.php/app_module/get_advertisers', reqBody)
      .pipe(map(res => res));
      return allAdv;
    */
  }

  ngOnInit () {
    this.searchTerm.valueChanges.pipe(
      debounceTime(500),
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
