import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign2UsernameComponent } from './assign2-username.component';

describe('Assign2UsernameComponent', () => {
  let component: Assign2UsernameComponent;
  let fixture: ComponentFixture<Assign2UsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign2UsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign2UsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
