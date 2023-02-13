// 获取到一个nft集合的所有持有者
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const get_nft_mints = async () => {
  const address = '0x711d136cebf66e3e9e4b801097f756e1c3861477'

  const owners = await alchemy.nft.getOwnersForContract(address)
  JSON.stringify()
}

const runMain = async () => {
  try {
    await get_nft_mints()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
