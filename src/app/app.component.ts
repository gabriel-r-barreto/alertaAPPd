import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import { AlertServiceService } from './services/alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _AlertServiceService: AlertServiceService) {
    
  }

  title = 'alertaApp';
  cardEmergency: boolean = false;
  nomeEscola: any;



ngOnInit() {
  this.inicializarDadosPrimeiraVez();
  
}


emergency(){

  if (this.nomeEscola){
      
  }

  this.cardEmergency = true;
}

inicializarDadosPrimeiraVez(){
  this._AlertServiceService.obterDados().subscribe(data => {
    console.log(data)
  })
}


}
