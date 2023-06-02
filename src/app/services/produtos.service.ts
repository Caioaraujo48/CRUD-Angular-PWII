import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://http://localhost:4200/produtos';

  constructor() { }

  buscarTodos(){
    
  }
}
