import fs from 'fs'
import Web3 from 'web3'

const web3 = new Web3(
  Web3.givenProvider || `https://mainnet.infura.io/v3/7c75f2ca58834663bfcbe477ea985aa2`,
)

console.log('[start get address]')

const filter = {
  fromBlock: 16547921,
  toBlock: 16550222,
  address: '0x055AA75d3F9ab4C45459aAE3793FD631FC16172c',
  topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'],
}

web3.eth.getPastLogs(filter).then(function (logs) {
  var tx_arr = []
  logs.forEach(function (log) {
    var tx_hash = log.transactionHash
    tx_arr.push(tx_hash)
  })
  console.log(tx_arr.length)
  for (var i = 0; i < tx_arr.length; i++) {
    var res = web3.eth.getTransaction(tx_arr[i])
    res.then(res => {
      var content = `${res.from}\n`
      const option = {
        flag: 'a',
      }
      console.log(content)
      fs.writeFile('config.txt', content, option, error => {
        if (error) {
          console.log('fs.writeFile failed err: ', error)
        }
      })
    })
  }
})
