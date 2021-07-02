import { EntityRepository, Repository } from "typeorm";
import { Manutencao } from "../entities/Manutencao";

@EntityRepository(Manutencao)
class ManutencaoRepository extends Repository<Manutencao> {}

export { ManutencaoRepository }