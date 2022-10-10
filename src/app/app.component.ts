import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  numeroUno: number = 0;
  numeroDos: number = 0;
  result: number = 0;
  mensaje: string = "";

  sumar():void{
    this.result=this.numeroUno+this.numeroDos;
  }

  restar():void{
    this.result=this.numeroUno-this.numeroDos;
  }

  multiplicar():void{
    this.result=this.numeroUno*this.numeroDos;
  }

  dividir():void{
    if(this.numeroUno == 0){
      this.mensaje = "Ahuevado como va a hacer eso ._."
    } else{
      this.result = this.numeroUno/this.numeroDos;
    }
  }
}
