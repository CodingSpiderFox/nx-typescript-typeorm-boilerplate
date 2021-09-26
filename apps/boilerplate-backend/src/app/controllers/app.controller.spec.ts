import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from './app.controller'
import { AppService } from '../services/app.service'
import { semver2dot0dot0Regex } from '@boilerplate/globals'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()
  })

  describe('getVersion', () => {
    it('should return a valid MAJOR.MINOR.PATCH version number', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getVersion()).toMatch(
        new RegExp(semver2dot0dot0Regex()),
      )
    })
  })
})
