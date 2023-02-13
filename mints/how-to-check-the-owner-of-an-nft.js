// 获取某个特定nft指定tokenId的持有者
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const main = async () => {
  // TIMEPieces contract address
  const address = '0xDd69da9a83ceDc730bc4d3C56E96D29Acc05eCDE'

  // Safe Haven Token ID
  const tokenId = 4254

  // Get owner of NFT
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
