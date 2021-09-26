import { Injectable } from '@nestjs/common'
import { UserEntity, UserRoleEnum } from '../../entities/user.entity'

@Injectable()
export class UserService {
  getUser(id: string): UserEntity {
    console.log(id)
    return {
      id: id,
      firstName: 'Peter',
      lastName: 'Meter, der',
      isActive: true,
      email: 'codingspiderfox@gmail.com',
      roles: [UserRoleEnum.SUPER_ADMIN],
      hashedPassword: '123',
      createDateTime: new Date(),
      lastChangedDateTime: new Date(),
      internalComment: null,
    }
  }
}
