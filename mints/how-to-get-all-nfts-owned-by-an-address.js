// 获取到一个地址拥有的所有nft
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const main = async () => {
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner('elanhapern.eth')
  // Print NFTs
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
