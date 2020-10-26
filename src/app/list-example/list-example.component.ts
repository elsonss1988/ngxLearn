import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  items = new Array(1000);
  constructor() {}

  ngOnInit(): void {}
}
