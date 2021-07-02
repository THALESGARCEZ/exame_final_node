import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('fornecedores')
class Fornecedor {

  @PrimaryColumn()
  id: string;

  @Column()
  nome_do_fornecedor: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Fornecedor }
