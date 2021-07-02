import { Router } from 'express'

import { FilialController } from './controllers/FilialController'
import { FornecedorController } from './controllers/FornecedorController';
import { ManutencaoController } from './controllers/ManutencaoController';

const rotas = Router();

const filialController = new FilialController()
const fornecedorController = new FornecedorController()
const manutencaoController = new ManutencaoController()

rotas.post('/filial', filialController.create)
rotas.get('/filial', filialController.index)

rotas.post('/fornecedores', fornecedorController.create)
rotas.get('/fornecedores', fornecedorController.index)

rotas.post('/manutencao', manutencaoController.create)
rotas.get('/manutencao', manutencaoController.index)
rotas.get('/manutencao/:id', manutencaoController.show)
rotas.delete('/manutencao/:id', manutencaoController.delete)
rotas.put('/manutencao/:id', manutencaoController.update)

export default rotas
