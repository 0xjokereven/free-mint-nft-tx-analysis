// get one address how many nft history have to mint
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)
var mint_count = 0
// Address we want get NFT mints from
const toAddress = '0x2c3cbbd20bed6bd6868ebdfe54ff6493fdbd6d45'

const res = await alchemy.core.getAssetTransfers({
  fromBlock: '0x0',
  fromAddress: '0x0000000000000000000000000000000000000000',
  toAddress: toAddress,
  excludeZeroValue: true,
  category: ['erc721', 'erc1155'],
})

// Print contract address and tokenId for each NFT (ERC721 or ERC1155):
for (const events of res.transfers) {
  if (events.erc1155Metadata == null) {
    mint_count++
  } else {
    for (const erc1155 of events.erc1155Metadata) {
      mint_count++
    }
  }
}

console.log(mint_count)
