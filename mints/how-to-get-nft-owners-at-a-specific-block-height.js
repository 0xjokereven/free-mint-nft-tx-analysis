// 获取某个特定的nft在特定区块高度的持有者
// https://docs.alchemy.com/reference/how-to-get-nft-owners-at-a-specific-block-height
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const main = async () => {
  // BAYC contract address
  const address = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'

  // Block number or height
  const block = '15753215'

  // Get owners
  const owners = await alchemy.nft.getOwnersForContract(address, false, block)
  console.log(owners)
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
