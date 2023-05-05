import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} esta em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = false;
  foto: string = '../../../assets/crud.png'
  dataValidade = '2021-12-31'

    constructor(){
    }
}
