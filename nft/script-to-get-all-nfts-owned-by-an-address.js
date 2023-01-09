// at now what nft i have
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const main = async () => {
  const nfts = await alchemy.nft.getNftsForOwner(
    '0x74720992f433cfdB7b5e8b82fEBc42cBf64f72fC',
  )
  console.log(nfts)
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
