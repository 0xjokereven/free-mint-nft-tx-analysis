// 获取一个集合中的所有nft
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const main = async () => {
  // Contract address
  const address = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'

  // Flag to omit metadata
  const omitMetadata = false

  // Get all NFTs
  const response = await alchemy.nft.getNftsForContract(address, {
    omitMetadata: omitMetadata,
  })
  console.log(JSON.stringify(response, null, 2))
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
