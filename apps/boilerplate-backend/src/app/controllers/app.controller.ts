import { Controller, Get } from '@nestjs/common'

import { AppService } from '../services/app.service'

@Controller()
export class AppController {
  @Get('/version')
  getVersion(): string {
    return this.appService.getVersion()
  }

  @Get('/health')
  getHealth(): null {
    return null
  }

  constructor(private readonly appService: AppService) {}
}
