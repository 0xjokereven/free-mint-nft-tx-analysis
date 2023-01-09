// get one wallet address history tx
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const fromAddress = '0x74720992f433cfdB7b5e8b82fEBc42cBf64f72fC'

const res = await alchemy.core.getAssetTransfers({
  fromBlock: '0x0',
  fromAddress: fromAddress,
  excludeZeroValue: true,
  category: ['erc721', 'erc1155'],
})

for (const events of res.transfers) {
  if (events.erc1155Metadata == null) {
    console.log(
      'ERC-721 Token Minted: ID- ',
      events.tokenId,
      ' Contract- ',
      events.rawContract.address,
    )
  } else {
    for (const erc1155 of events.erc1155Metadata) {
      console.log(
        'ERC-1155 Token Minted: ID- ',
        erc1155.tokenId,
        ' Contract- ',
        events.rawContract.address,
      )
    }
  }
}
