import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  idToDo;
  title: string;
  description: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idToDo = params.get('idToDo');
    });
  }

  update(){
    if(this.title == null || this.description == null){
      alert("Uno de los campos está vacío.")
    }else{
      let json = {
        "idToDo": this.idToDo,
        "title": this.title,
        "description": this.description
      }
      
      this.apiService.update(json).subscribe(
        respuesta =>{
          respuesta["succes"];
          respuesta["message"];
          console.log(respuesta)
          location.href='http://localhost:4200'
        },
        error =>{
          alert("Error de conexion")
        }
      );
    }
  }
}
