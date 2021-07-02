import { EntityRepository, Repository } from "typeorm";
import { Fornecedor } from "../entities/Fornecedor";

@EntityRepository(Fornecedor)
class FornecedorRepository extends Repository<Fornecedor> {}

export { FornecedorRepository }