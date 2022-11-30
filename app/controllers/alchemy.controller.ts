import { Get, JsonController } from 'routing-controllers'
import { Service } from 'typedi'
const { Network, Alchemy } = require('alchemy-sdk')

const settings = {
  apiKey: 'eUk0BL63e_xBVKI9WNYKBKiy0ZlI4lzA', // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
}

const alchemy = new Alchemy(settings)

@JsonController()
@Service()
export class AlchemyController {
  @Get('/try_alchemy')
  async try_alchemy() {
    const latestBlock = await alchemy.core.getBlockNumber()
    console.log('The latest block number is', latestBlock)
    return []
  }
}
