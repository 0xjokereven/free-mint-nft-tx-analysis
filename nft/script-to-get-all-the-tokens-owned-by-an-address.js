// get one wallet address balance
import { Alchemy, Network } from 'alchemy-sdk'

const config = {
  apiKey: '1Nn9158qSKX_oeHPJWRw6jLh24j4QfIk',
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(config)

const main = async () => {
  // Wallet address
  const address = '0xce4BA677aEBcBB178376228801Ac62Bc9Bea6c21'

  // Get token balances
  const balances = await alchemy.core.getTokenBalances(address)

  // Remove tokens with zero balance
  const nonZeroBalances = balances.tokenBalances.filter(token => {
    return token.tokenBalance !== '0'
  })

  console.log(`Token balances of ${address} \n`)

  // Counter for SNo of final output
  let i = 1

  // Loop through all tokens with non-zero balance
  for (let token of nonZeroBalances) {
    // Get balance of token
    let balance = token.tokenBalance

    // Get metadata of token
    const metadata = await alchemy.core.getTokenMetadata(token.contractAddress)

    // Compute token balance in human-readable format
    balance = balance / Math.pow(10, metadata.decimals)
    balance = balance.toFixed(2)

    // Print name, balance, and symbol of token
    console.log(`${i++}. ${metadata.name}: ${balance} ${metadata.symbol}`)
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
