class Fatura {
    private _numero: number;
    private _descricao: string;
    private _quantidadecomprada: number;
    private _preco: number;
  
    constructor( numero: number, descricao: string, quantidadecomprada: number, preco: number ) {
      this._numero = numero;
      this._descricao = descricao;
      this._quantidadecomprada = quantidadecomprada;
      this._preco = preco;
    }
      public valorfatura() {
      return this._quantidadecomprada * this._preco;
    }
  }  
  const boleto = new Fatura(100, 'picole', 2, 2)
  const valordafatura = boleto.valorfatura()
  console.log(valordafatura)
  console.log(boleto)