import { Request, Response } from "express";
import { FornecedorServices } from "../services/FornecedorServices";

class FornecedorController {

  async create(request: Request, response: Response) {
    try {
      const { nome_do_fornecedor, email, telefone } = request.body

      if (!nome_do_fornecedor || !email || !telefone) {
        return response.status(400).json({ message: 'Envie todos os dados corretamente'})
      }

      const fornecedorServices = new FornecedorServices()
      const fornecedor = await fornecedorServices.create({
        nome_do_fornecedor,
        email,
        telefone
      })
      return response.status(201).json(fornecedor)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  async index(request: Request, response: Response) {
    try {
      const fornecedorServices = new FornecedorServices()
      const fornecedores = await fornecedorServices.index()
      return response.status(200).json(fornecedores)
      
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

}

export { FornecedorController }