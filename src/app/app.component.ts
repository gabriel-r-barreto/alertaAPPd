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
  endereco: any;

  constructor(private _AlertServiceService: AlertServiceService) {

  }

  title = 'alertaApp';
  cardEmergency: boolean = false;
  nomeEscola: any;
  latitude: any
  longitude: any



  ngOnInit() {
    this.inicializarDadosPrimeiraVez();
    this.repeat()

  }


  emergency() {



    if ("geolocation" in navigator) {
      // Verifica se o navegador suporta geolocalização
      navigator.geolocation.getCurrentPosition((position) => {
        // Função de sucesso para obter a posição
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        // console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
        this._AlertServiceService.getGeo(this.latitude, this.longitude).subscribe((response: any) => {
          if (response) {
            this.endereco = response.display_name;
            // console.log('Endereço:', this.endereco);

            if (this.nomeEscola) {

              let obj = {

                "valor": true,
                "nomeEscola": this.nomeEscola,
                "endereco": this.endereco

              }
              this._AlertServiceService.enviarDados(obj).subscribe(data => {

              })
            }

          } else {
            console.error('Falha na geocodificação:', response.error_message);
          }
        }, error => {
          console.error('Erro na chamada à API de geocodificação:', error);
        });
      }, (error) => {
        // Função de erro em caso de falha na obtenção da posição
        console.error('Erro ao obter geolocalização', error);
      });
    } else {
      console.error('Geolocalização não suportada pelo navegador');
    }

  }

  inicializarDadosPrimeiraVez() {
    this._AlertServiceService.obterDados().subscribe(data => {

      if (data.valor !== "") {
        this.alerta = true;
        this.escola = data.escolar
        this.endereco = data.endereco
      } else {
        this.alerta = false
      }
    })
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async repeat() {
    const rep = true
    while (rep == true) {
      await this.delay(5000);
      this.inicializarDadosPrimeiraVez();
    }
  }


}
