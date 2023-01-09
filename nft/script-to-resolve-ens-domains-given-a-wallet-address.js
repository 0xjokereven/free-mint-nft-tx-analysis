// get one wallet address ens name
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const walletAddress = '0xce4BA677aEBcBB178376228801Ac62Bc9Bea6c21'
const ensContractAddress = '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85'
const nfts = await alchemy.nft.getNftsForOwner(walletAddress, {
  contractAddresses: [ensContractAddress],
})

console.log(nfts)
