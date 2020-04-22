import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  namaTemp : String[];
  penjelasanTemp : String[];

  txtNama : String;
  txtPenjelasan : String;
  ngOnInit() {
  }

  add(){
    this.namaTemp.push(this.txtNama);
    this.penjelasanTemp.push(this.txtPenjelasan);
  }
}