import { EntityRepository, Repository } from 'typeorm'
import { UserEntity } from '../../entities/user.entity'

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  findById(id: string) {
    return this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne()
  }

  findByEmail(email: string) {
    return this.createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne()
  }
}
