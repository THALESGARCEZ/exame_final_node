import { getCustomRepository } from "typeorm"
import { FilialRepository } from "../repositories/FilialRepository"

interface IFilialCreate {
  sigla_da_filial: string;
}

class FilialServices {
  
  async create({ sigla_da_filial }: IFilialCreate) {
    const filialRepository = getCustomRepository(FilialRepository)
    
    const procurarFilialExistente = await filialRepository.findOne({
      where: { sigla_da_filial }
    })

    if (procurarFilialExistente) {
      throw new Error('Sigla da filial existente')
    }

    const filial = filialRepository.create({
      sigla_da_filial
    })

    return await filialRepository.save(filial)
  }

  async index() {
    const filialRepository = getCustomRepository(FilialRepository)
    const filiais = await filialRepository.find()

    return filiais
  }

}

export { FilialServices }