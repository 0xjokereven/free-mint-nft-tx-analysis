// get one nft owner is who
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const main = async () => {
  const address = '0x3aAc20f93A09A6b78455bc4EA812fe4199485E2E'
  const tokenId = 17
  const owner = await alchemy.nft.getOwnersForNft(address, tokenId)
  console.log(owner)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
