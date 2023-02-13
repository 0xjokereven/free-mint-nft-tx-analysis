// 获取到钱包非垃圾nft
import { Alchemy, Network, NftFilters } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(config)

const main = async () => {
  const address = '0x1d8E348c70Df4384df3ca7e53102509480dED742'

  let nfts = await alchemy.nft.getNftsForOwner(address, {
    excludeFilters: [NftFilters.SPAM],
  })
  nfts = nfts['ownedNfts']

  console.log('get non-spam nfts')
  for (let i = 0; i < nfts.length; i++) {
    console.log('*', nfts[i].title)
  }
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
