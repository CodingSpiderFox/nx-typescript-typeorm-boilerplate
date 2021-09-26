import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm'

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @CreateDateColumn({
    name: 'createDateTime',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDateTime: Date

  @UpdateDateColumn({
    name: 'lastChangedDateTime',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastChangedDateTime: Date

  @Column({
    name: 'internalComment',
    type: 'varchar',
    length: 300,
    nullable: true,
  })
  internalComment: string | null
}
