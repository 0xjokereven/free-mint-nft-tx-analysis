import { Get, JsonController } from 'routing-controllers'
import { Service } from 'typedi'

@JsonController()
@Service()
export class PingController {
  @Get('/ping')
  async ping() {
    return []
  }
}
