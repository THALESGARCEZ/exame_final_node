import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

import { v4 as uuid } from 'uuid'
import { Filial } from './Filial';
import { Fornecedor } from './Fornecedor';

@Entity('manutencoes')
class Manutencao {

  @PrimaryColumn()
  id: string;

  @Column()
  id_da_filial: string;

  @JoinColumn({ name: 'id_da_filial' })
  @ManyToOne(() => Filial)
  filial: Filial

  @Column()
  nome_do_centro_de_custo: string;

  @Column()
  nome_do_produto: string;

  @Column()
  id_do_fornecedor: string;

  @JoinColumn({ name: 'id_do_fornecedor' })
  @ManyToOne(() => Fornecedor)
  fornecedor: Fornecedor

  @Column()
  servico_executado: string;

  @Column()
  data_do_servico: Date;

  @Column()
  observacao: string;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Manutencao }
