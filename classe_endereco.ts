interface IEndereco {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
  }
    const logradouro: IEndereco = { rua: 'rua 18', numero: 2, bairro: 'vila santa cecilia', cidade: 'Volta redonda'}
    console.log(logradouro)