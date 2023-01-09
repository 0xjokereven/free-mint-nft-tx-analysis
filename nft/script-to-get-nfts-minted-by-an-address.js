// get one address how many nft history have to mint
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

// Address we want get NFT mints from
const toAddress = '0xce4BA677aEBcBB178376228801Ac62Bc9Bea6c21'

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
