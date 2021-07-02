import { getCustomRepository } from "typeorm"
import { FilialRepository } from "../repositories/FilialRepository"
import { FornecedorRepository } from "../repositories/FornecedorRepository"
import { ManutencaoRepository } from "../repositories/ManutencaoRepository"

interface IManutencaoCreate {
  id_da_filial: string;
  nome_do_centro_de_custo: string; 
  nome_do_produto: string;
  id_do_fornecedor: string;
  servico_executado: string;
  data_do_servico: Date;
  observacao: string;
}

interface IManutencaoUpdate {
  id: string;
  id_da_filial: string;
  nome_do_centro_de_custo: string; 
  nome_do_produto: string;
  id_do_fornecedor: string;
  servico_executado: string;
  data_do_servico: Date;
  observacao: string;
}

interface IManutencaoShow {
  id: string;
}

class ManutencaoServices {

  async create({
    id_da_filial, 
    nome_do_centro_de_custo, 
    nome_do_produto, 
    id_do_fornecedor, 
    servico_executado, 
    data_do_servico, 
    observacao
  }: IManutencaoCreate) {
    const manutencaoRepository = getCustomRepository(ManutencaoRepository)
    const filialRepository = getCustomRepository(FilialRepository)
    const fornecedorRepository = getCustomRepository(FornecedorRepository)
    
    const checarSeFilialExiste = await filialRepository.findOne({
      id: id_da_filial
    })

    if (!checarSeFilialExiste) {
      throw new Error('ID da filial inválido')
    }

    const checarSeFornecedorExiste = await fornecedorRepository.findOne({
      where: { id: id_do_fornecedor }
    })

    if (!checarSeFornecedorExiste) {
      throw new Error('ID do fornecedor inválido')
    }

    const manutencao = manutencaoRepository.create({
      id_da_filial,
      nome_do_centro_de_custo,
      nome_do_produto,
      id_do_fornecedor,
      servico_executado,
      data_do_servico,
      observacao
    })

    return await manutencaoRepository.save(manutencao)

  }

  async index() {
    const manutencaoRepository = getCustomRepository(ManutencaoRepository)
    const manutencoes = await manutencaoRepository.find({
      relations: ['filial', 'fornecedor']
    })

    return manutencoes
  }

  async show({ id }: IManutencaoShow) {
    const manutencaoRepository = getCustomRepository(ManutencaoRepository)
    const manutencao = await manutencaoRepository.findOne(id,{
      relations: ['filial', 'fornecedor']
    })

    if (!manutencao) {
      throw new Error('ID da manutenção inválida')
    }

    return manutencao
  }

  async delete({ id }: IManutencaoShow) {
    const manutencaoRepository = getCustomRepository(ManutencaoRepository)

    const manutencao = await manutencaoRepository.findOne(id)

    if (!manutencao) {
      throw new Error('ID da manutenção inválida')
    }

    return await manutencaoRepository.delete({ id })
  }

  async update({
    id,
    id_da_filial, 
    nome_do_centro_de_custo, 
    nome_do_produto, 
    id_do_fornecedor, 
    servico_executado, 
    data_do_servico, 
    observacao
  }: IManutencaoUpdate) {
    const manutencaoRepository = getCustomRepository(ManutencaoRepository)
    const filialRepository = getCustomRepository(FilialRepository)
    const fornecedorRepository = getCustomRepository(FornecedorRepository)
    
    const checarSeManutencaoExiste = await manutencaoRepository.findOne(id)

    if (!checarSeManutencaoExiste) {
      throw new Error('ID da manutenção inválido')
    }

    const checarSeFilialExiste = await filialRepository.findOne({
      id: id_da_filial
    })

    if (!checarSeFilialExiste) {
      throw new Error('ID da filial inválido')
    }

    const checarSeFornecedorExiste = await fornecedorRepository.findOne({
      where: { id: id_do_fornecedor }
    })

    if (!checarSeFornecedorExiste) {
      throw new Error('ID do fornecedor inválido')
    }

    await manutencaoRepository.update(id, {
      id_da_filial,
      nome_do_centro_de_custo,
      nome_do_produto,
      id_do_fornecedor,
      servico_executado,
      data_do_servico,
      observacao
    })

    const manutencao = await manutencaoRepository.findOne(id,{
      relations: ['filial', 'fornecedor']
    })


    return manutencao
  }

}

export { ManutencaoServices }