// order by contract address to get one nft information
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const metadata = await alchemy.core.getTokenMetadata(
  '0x3aAc20f93A09A6b78455bc4EA812fe4199485E2E',
)

console.log('TOKEN METADATA')
console.log(metadata)
