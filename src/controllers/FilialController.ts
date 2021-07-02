import { Request, Response } from 'express'
import { FilialServices } from '../services/FilialServices'

class FilialController {

  async create(request: Request, response: Response) {
    try {
      const { sigla_da_filial } = request.body

      if (!sigla_da_filial) {
        return response.status(400).json({ message: 'Envie todos os dados corretamente'})
      }

      const filialServices = new FilialServices()
      const filial = await filialServices.create({
        sigla_da_filial
      })

      return response.status(201).json(filial)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async index(request: Request, response: Response) {
    try {
      const filialServices = new FilialServices()
      const filiais = await filialServices.index()

      return response.status(200).json(filiais)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

}

export { FilialController }