import { Get, JsonController } from 'routing-controllers'
import { Service } from 'typedi'
const { Network, Alchemy } = require('alchemy-sdk')

const settings = {
  apiKey: 'eUk0BL63e_xBVKI9WNYKBKiy0ZlI4lzA', // Replace with your Alchemy API Key.
  // network: Network.ETH_MAINNET, // Replace with your network.
  network: Network.ETH_GOERLI,
}

const alchemy = new Alchemy(settings)

@JsonController()
@Service()
export class AlchemyController {
  // http://localhost:3000/api/try_alchemy_get_block_number
  @Get('/try_alchemy_get_block_number')
  async try_alchemy() {
    const latestBlock = await alchemy.core.getBlockNumber()
    console.log('The latest block number is', latestBlock)
    return { latestBlock: latestBlock }
  }
}
