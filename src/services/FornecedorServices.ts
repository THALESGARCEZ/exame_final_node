import { getCustomRepository } from "typeorm"
import { FornecedorRepository } from "../repositories/FornecedorRepository"

interface IFornecedorCreate {
  nome_do_fornecedor: string;
  email: string;
  telefone: string;
}

class FornecedorServices {

  async create({ nome_do_fornecedor, email, telefone }: IFornecedorCreate) {
    const fornecedorRepository = getCustomRepository(FornecedorRepository)
    const procurarEmailExistente = await fornecedorRepository.findOne({
      where: { email }
    })

    if (procurarEmailExistente) {
      throw new Error('E-mail existente')
    }

    const fornecedor = fornecedorRepository.create({
      nome_do_fornecedor,
      email,
      telefone
    })

    return await fornecedorRepository.save(fornecedor)
  }

  async index() {
    const fornecedorRepository = getCustomRepository(FornecedorRepository)
    const fornecedores = await fornecedorRepository.find()

    return fornecedores
  }

}

export { FornecedorServices }