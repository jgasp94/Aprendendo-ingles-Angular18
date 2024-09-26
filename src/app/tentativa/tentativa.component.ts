import { Component, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativa',
  standalone: true,
  imports: [],
  templateUrl: './tentativa.component.html',
  styleUrl: './tentativa.component.css'
})
export class TentativaComponent {
  @Input() public tentativas : number = 3;
  public Coracoes : Coracao[] = [new Coracao(true), new Coracao(true), new Coracao(true)]

  constructor(){
  }

  ngOnChanges(){   
    if(this.tentativas !== this.Coracoes.length && this.tentativas >= 0){
      let index = (this.Coracoes.length - this.tentativas) -1;
      this.Coracoes[index].CoracaoCheio = false;
      console.log(this.Coracoes)
    }
  }

}