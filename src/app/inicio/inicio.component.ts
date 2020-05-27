import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InicioComponent implements OnInit {

  todos:any;
  title: string;
  description: string;

  constructor(private apiService: ApiService) { 
    this.todos = this.apiService.getListToDo().subscribe(
      respuesta => {
        if (respuesta["succes"]){
          this.todos = respuesta;
          console.log(respuesta);
        } else {
          alert("Hubo un error en el servidor, el mensaje es: "+respuesta["message"]);
        }
      },
      error => {
        alert("Error de conexión")
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

  addToDo(){
    document.getElementById('id01').style.display='block'
  }

  delete(idToDo){  
    this.apiService.delete(idToDo).subscribe(
      respuesta => {
        respuesta["succes"];
        respuesta["message"];
        console.log(respuesta)
        location.reload();
      },
      error => {
        alert("Error de conexion")
      }
    );
  }

  register(){
    if(this.title == null || this.description == null){
      alert("Uno de los campos está vacío.")
    }else{
      let json = {
        "title": this.title,
        "description": this.description
      }
      
      this.apiService.register(json).subscribe(
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
