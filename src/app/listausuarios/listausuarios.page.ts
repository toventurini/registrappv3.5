import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.page.html',
  styleUrls: ['./listausuarios.page.scss'],
})
export class ListausuariosPage implements OnInit {

  characters = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        console.log(res);
        this.characters = res.results;
      })
  }

}
