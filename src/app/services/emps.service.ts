import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Injectable()
export class empsService {

    constructor (private HttpService: HttpClient ) {}
        
    search( term ) {
        var allEmps = this.HttpService.get('http://localhost/mParlorApp/index.php/app_module/get_users?username='+ encodeURIComponent(term))
        .pipe(
            debounceTime(500),
            map(
                (data: any) => {
                    return (
                        data.users != null && data.users.length != 0 ? data.users as any[] : [{'username': 'No user found!!'}] as any 
                    )
                }
            )
        );
        return allEmps;
    }
}