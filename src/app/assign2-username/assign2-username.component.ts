import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign2-username',
  templateUrl: './assign2-username.component.html',
  styleUrls: ['./assign2-username.component.css']
})
export class Assign2UsernameComponent implements OnInit {
  userName = '';
  resetButton = false;

  constructor() {
  }

  // resetUserName() {
  //     this.userName = '';
  //   }

  ngOnInit() {
  }

}
