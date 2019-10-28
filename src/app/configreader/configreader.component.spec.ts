import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigreaderComponent } from './configreader.component';

describe('ConfigreaderComponent', () => {
  let component: ConfigreaderComponent;
  let fixture: ComponentFixture<ConfigreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
