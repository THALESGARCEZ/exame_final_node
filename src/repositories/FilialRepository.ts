import { EntityRepository, Repository } from "typeorm";
import { Filial } from "../entities/Filial";

@EntityRepository(Filial)
class FilialRepository extends Repository<Filial> {}

export { FilialRepository }