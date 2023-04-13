import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import { AlertServiceService } from './services/alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  alerta: boolean = false;
  escola: any;

  constructor(private _AlertServiceService: AlertServiceService) {
    
  }

  title = 'alertaApp';
  cardEmergency: boolean = false;
  nomeEscola: any;



ngOnInit() {
  this.inicializarDadosPrimeiraVez();
  this.repeat()
  
}


emergency(){

  if (this.nomeEscola){

      let obj = {
      
        "valor": true,
        "nomeEscola": this.nomeEscola

      }
      this._AlertServiceService.enviarDados(obj).subscribe(data => {
  
      })
  }
}

inicializarDadosPrimeiraVez(){
  this._AlertServiceService.obterDados().subscribe(data => {
    
    if (data.valor !== ""){
      this.alerta = true;
      this.escola = data.escolar
    } else {
      this.alerta = false
    }
  })
}


delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

  async repeat(){
  const rep = true
  while (rep == true) {
  await this.delay(5000);
    this.inicializarDadosPrimeiraVez();
  }
}


}
