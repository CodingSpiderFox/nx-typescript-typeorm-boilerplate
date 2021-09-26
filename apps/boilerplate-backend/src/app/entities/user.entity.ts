import { Column, Entity } from 'typeorm'
import { BaseEntity } from './base-entity.entity'

export enum UserRoleEnum {
  SUPER_ADMIN,
  PROJECT_ADMIN,
  PROJECT_MEMBER,
}

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({ name: 'isActive', type: 'boolean', default: true })
  isActive: boolean

  @Column({ name: 'firstName', type: 'varchar', length: 255, nullable: false })
  firstName: string

  @Column({ name: 'lastName', type: 'varchar', length: 255, nullable: false })
  lastName: string

  @Column({ name: 'email', type: 'varchar', length: 255, nullable: false })
  email: string

  @Column({
    name: 'roles',
    type: 'enum',
    enum: UserRoleEnum,
    array: true,
    default: null,
    nullable: false,
  })
  roles: UserRoleEnum[]

  @Column({
    name: 'hashedPassword',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  hashedPassword: string
}
