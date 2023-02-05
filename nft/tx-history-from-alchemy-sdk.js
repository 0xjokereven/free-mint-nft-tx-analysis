// get one wallet address history tx
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const fromAddress = '0xf3380CfbacAF3A2C0C69A7B2d5aa2013A33094cF'

const res = await alchemy.core.getAssetTransfers({
  fromBlock: '0x0',
  fromAddress: fromAddress,
  excludeZeroValue: true,
  category: ['erc721', 'erc1155'],
})

const data = await alchemy.core.getAssetTransfers({
  fromBlock: '0x0',
  fromAddress: fromAddress,
  category: ['erc721', 'erc1155'],
})

var mint_num = 0
for (const events of res.transfers) {
  if (events.erc1155Metadata == null) {
    mint_num++
  } else {
    for (const erc1155 of events.erc1155Metadata) {
      mint_num++
    }
  }
}

console.log(mint_num)
console.log(data.transfers.length)
