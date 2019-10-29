import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configreader',
  templateUrl: './configreader.component.html',
  styleUrls: ['./configreader.component.css']
})
export class ConfigreaderComponent implements OnInit {
  arrjsonWidgets = <any>[];

  constructor() { }

  ngOnInit() {
  }

}
