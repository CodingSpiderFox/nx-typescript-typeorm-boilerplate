import { Test } from '@nestjs/testing'

import { AppService } from './app.service'
import { semver2dot0dot0Regex } from '@boilerplate/globals'

describe('AppService', () => {
  let service: AppService

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile()

    service = app.get<AppService>(AppService)
  })

  describe('getVersion', () => {
    it('should return a valid MAJOR.MINOR.PATCH version number', () => {
      expect(service.getVersion()).toMatch(new RegExp(semver2dot0dot0Regex()))
    })
  })
})
