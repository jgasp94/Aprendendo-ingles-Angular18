import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from "./topo/topo.component"
import { PainelComponent } from './painel/painel.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopoComponent, PainelComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() public jogoEncerrado : string = "default";
  
  public jogarNovamente() :void {
    this.jogoEncerrado = "default";
  }

  public encerrarJogo(Resultado : string) : void {
    this.jogoEncerrado = Resultado;
  }
}
