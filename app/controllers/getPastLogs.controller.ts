import { Get, JsonController } from 'routing-controllers'
import { Service } from 'typedi'
import Web3 from 'web3'

const ALCHEMY_PRODUCT_ID = process.env.ALCHEMY_PRODUCT_ID

const web3 = new Web3(
  Web3.givenProvider || `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_PRODUCT_ID}`,
)

@JsonController()
@Service()
export class getPastLogsController {
  //
  // http://localhost:3000/api/get_past_logs
  @Get('/get_past_logs')
  async get_past_logs() {
    web3.eth.getPastLogs({}).then(console.log)
    return []
  }
}
