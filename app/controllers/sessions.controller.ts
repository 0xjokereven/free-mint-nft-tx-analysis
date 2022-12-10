import {
  BadRequestError,
  Post,
  JsonController,
  BodyParam,
  Get,
} from 'routing-controllers'
import { SessionsService } from '../services'
import { Prisma } from '@prisma/client'
import { Service } from 'typedi'

@JsonController()
@Service()
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  // http://localhost:3000/api/sessions
  @Get('/sessions')
  async query() {
    return []
  }

  // http://localhost:3000/api/sessions
  @Post('/sessions')
  async create(
    @BodyParam('username') name: string,
  ): Promise<Prisma.SessionGetPayload<any>> {
    if (!name) {
      throw new BadRequestError('username is required')
    }
    return await this.sessionsService.create({ name })
  }
}
