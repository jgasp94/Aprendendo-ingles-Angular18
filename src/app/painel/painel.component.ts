import { Component, EventEmitter, Output } from '@angular/core';
import { TentativaComponent } from '../tentativa/tentativa.component';
import { ProgressoComponent } from '../progresso/progresso.component';
import { FRASES } from '../mock/frases-mock';
import { Frase } from '../shared/frases.model';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [TentativaComponent, ProgressoComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
  host: {ngSkipHydration: 'true'}
})
export class PainelComponent {
  public arrFrases = FRASES;
  public tentativa : number = 3;
  public rodada : number = 0;
  public resposta : string = "";
  public progresso : number = 0;
  public Frase : Frase = this.arrFrases[this.rodada];
  @Output() public jogoEncerrado : EventEmitter<string> = new EventEmitter();
  
  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {

  }

  public atualizaReposta(Evento : Event){
    this.resposta = (<HTMLInputElement>Evento.target).value; 
  }

  public validarResposta() : void {
      if(this.arrFrases[this.rodada].frasePtBr != this.resposta){
        this.tentativa --;
        if(this.tentativa === -1)
            this.jogoEncerrado.emit('perdeu');
        else  
            alert("Você errou! 😰");
      }
      else
      {
        this.rodada++;
        if(this.rodada === 4)
          this.jogoEncerrado.emit('ganhou');
        
        this.progresso = this.progresso + (100 / this.arrFrases.length);
        this.atualizaRodada();
      }
  }

  private atualizaRodada() : void {
    this.Frase = this.arrFrases[this.rodada];
    this.resposta = "";
  }
}
