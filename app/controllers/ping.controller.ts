import { Get, JsonController } from 'routing-controllers'
import { Service } from 'typedi'

@JsonController()
@Service()
export class PingController {

  // http:localhost:3000/api/ping
  @Get('/ping')
  async ping() {
    return { message: 'pong' }
  }
}
