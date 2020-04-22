import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private router: Router) { }
  txtNama : String;
  txtPenjelasan : String;
  ngOnInit() {
        
  }

  move(){
    this.router.navigate(['/list', this.txtNama, this.txtPenjelasan]);
  }

}