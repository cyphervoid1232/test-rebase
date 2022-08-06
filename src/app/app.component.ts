import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-rebase';
  constructor(){
    console.log("test create")
  }

  ngOnInit(): void {
    console.log("test ng onit")
  }
}
