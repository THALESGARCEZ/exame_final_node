class Veiculo {
    private _modelo: string;
    private _marca: string;
    private _ano: number;
    private _valorlocacao: number;
    private _quantidadedias: number;
  
    constructor ( modelo: string, marca: string, ano: number, valorlocacao: number, quantidadedias: number)
     {
      this._modelo = modelo;
      this._marca = marca;
      this._ano = ano;
      this._valorlocacao = valorlocacao;
      this._quantidadedias = quantidadedias;
    }
  
    public get modelo() {
      return this._modelo;
    }
  
    public set modelo(modelo: string) {
      if (modelo.trim() === '') {
        console.log('modelo invalido')
        return;
      }
      this._modelo = modelo;
    }
  
    public get marca() {
      return this._marca;
    }
  
    public set marca(marca: string) {
      if (marca.trim() === '') {
        console.log('marca invalida')
        return;
      }
      this._marca = marca;
    }

    public get ano() {
      return this._ano;
    }  
    public set ano(ano: number) {
      if (ano === 0) {
        console.log('ano invalido')
        return;
      }  
      this._ano = ano;
    }
      public get valorlocacao() {
      return this._valorlocacao;
    }  
    public set valorlocacao(valorlocacao: number) {
      if (valorlocacao === 0) {
        console.log('Valor locaçao inválido')
        return;
      }
  
      this._valorlocacao = valorlocacao;
    }
  
    public get quantidadedias() {
      return this._quantidadedias;
    }
  
    public set quantidadedias(quantidadedias: number) {
      if (quantidadedias === 0) {
        console.log('quantidades  de dias invalido')
        return;
      }
        this._quantidadedias = quantidadedias;
    }
      public passeio(quantidadedias: number, valorlocacao: number) {
      return quantidadedias * valorlocacao
    }
  }
  const veiculo = new Veiculo('spacefox', 'wv', 2015, 2500, 3)
  const passeios = veiculo.passeio(2, 2500)
  console.log(`O valor total da locação  é ${passeios}`);
  console.log(veiculo);