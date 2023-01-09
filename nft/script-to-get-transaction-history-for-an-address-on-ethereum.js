import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const data = await alchemy.core.getAssetTransfers({
  fromBlock: '0x0',
  fromAddress: '0x74720992f433cfdB7b5e8b82fEBc42cBf64f72fC',
  category: ['external', 'internal', 'erc20', 'erc721', 'erc1155'],
})

console.log(data)
