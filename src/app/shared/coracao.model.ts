export class Coracao {
   public CoracaoCheio : boolean = true;
   public CoracaoCheioUrl : string = "./assets/coracao_cheio.png";
   public CoracaoVazioUrl : string = "./assets/coracao_vazio.png";

   constructor(coracaoCheio : boolean) {
        this.CoracaoCheio = coracaoCheio;        
   }

   public GetCoracaoUrl() : string {
        return this.CoracaoCheio ? this.CoracaoCheioUrl : this.CoracaoVazioUrl;
   }
}