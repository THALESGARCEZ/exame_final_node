import { Request, Response } from 'express'
import { ManutencaoServices } from '../services/ManutencaoServices'

class ManutencaoController {

  async create(request: Request, response: Response) {
    try {
      const { 
        id_da_filial, 
        nome_do_centro_de_custo, 
        nome_do_produto, 
        id_do_fornecedor, 
        servico_executado, 
        data_do_servico, 
        observacao 
      } = request.body

      if (!id_da_filial || !nome_do_centro_de_custo || !nome_do_produto || !id_do_fornecedor || !servico_executado ||
        !data_do_servico || !observacao) 
      {
        return response.status(400).json({ message: 'Envie todos os dados corretamente'})
      }

      const manutencaoServices = new ManutencaoServices()
      const manutencao = await manutencaoServices.create({
        id_da_filial, 
        nome_do_centro_de_custo, 
        nome_do_produto, 
        id_do_fornecedor, 
        servico_executado, 
        data_do_servico, 
        observacao 
      })

      return response.status(201).json(manutencao)

    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async index(request: Request, response: Response) {
    try {
      const manutencaoServices = new ManutencaoServices()
      const manutencoes = await manutencaoServices.index()
      return response.status(201).json(manutencoes) 
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params
      const manutencaoServices = new ManutencaoServices()
      const manutencoes = await manutencaoServices.show({ id })
      return response.status(201).json(manutencoes) 
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params
      const manutencaoServices = new ManutencaoServices()
      await manutencaoServices.delete({ id })
      return response.status(201).json({ manutencao: 'Manutenção deletada com sucesso' }) 
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const {
        id_da_filial, 
        nome_do_centro_de_custo, 
        nome_do_produto, 
        id_do_fornecedor, 
        servico_executado, 
        data_do_servico, 
        observacao 
      } = request.body

      if (!id_da_filial || !nome_do_centro_de_custo || !nome_do_produto || !id_do_fornecedor || !servico_executado ||
        !data_do_servico || !observacao) 
      {
        return response.status(400).json({ message: 'Envie todos os dados corretamente'})
      }

      const manutencaoServices = new ManutencaoServices()
      const manutencao = await manutencaoServices.update({
        id,
        id_da_filial, 
        nome_do_centro_de_custo, 
        nome_do_produto, 
        id_do_fornecedor, 
        servico_executado, 
        data_do_servico, 
        observacao 
      })

      return response.status(201).json(manutencao)

    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

}

export { ManutencaoController }