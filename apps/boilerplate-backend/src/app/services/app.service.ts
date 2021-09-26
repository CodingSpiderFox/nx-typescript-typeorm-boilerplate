import { version } from '../../../../../package.json'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getVersion() {
    return version
  }
}
