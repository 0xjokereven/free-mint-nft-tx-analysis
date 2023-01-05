// Setup: npm install alchemy-sdk
import { Alchemy, Network } from 'alchemy-sdk'

const address = '0x9D1CB67Fd65Fa0B842a873ebDc269f6F71988e9e'
const config = {
  apiKey: 'KTHY6dSRDoYxkAMQo0EfNEfRBCRvMO1o',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const data = await alchemy.core.getAssetTransfers({
  fromBlock: '0x0',
  fromAddress: `${address}`,
  category: ['erc721'],
})

const count = await alchemy.core.getTransactionCount(`${address}`)

const pi = (count - data.transfers.length * 2) / count

console.log(data.transfers.length, count, pi)
