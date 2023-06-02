import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
  template:`<h3>Escrito por : {{autor}}</h3>`
})
export class HomeComponent{
  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} esta em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = '../../../assets/crud.png'
  dataValidade = '2021-12-31'

    constructor(){
    }
}
