import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: "Erick",
    idade: 18,
    altura: 1.70,
    graduado: false
  };

  listaProdutos: any[] = [
    {nome: 'Curso de Angular', precoProduto: 35.36, validade: '2023-12-31', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2023-12-31', id: 2, promocao: true},
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2023-12-31'},
  ];

  constructor() {
    for (let item of this.listaStrings) {
      console.log(item);
    }
    for (const item of this.listaNumeros) {
      console.log(item);
    }
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
  }

}
