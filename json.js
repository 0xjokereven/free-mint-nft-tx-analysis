'use strict'

import { Alchemy, Network } from 'alchemy-sdk'
import fs from 'fs'

const alchemy_config = {
  apiKey: 'KTHY6dSRDoYxkAMQo0EfNEfRBCRvMO1o',
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(alchemy_config)

let rawdata = fs.readFileSync('config.json')
let config = JSON.parse(rawdata)
let result = config
const arr = []
arr.push(result)

for (let i of arr) {
  var address = Object.keys(i)

  for (let index = 0; index < address.length; index++) {
    var add = address[index]
    await sleep(100)
    const data = await alchemy.core.getAssetTransfers({
      fromBlock: '0x0',
      fromAddress: `${add}`,
      category: ['erc721'],
    })
    await sleep(100)
    const count = await alchemy.core.getTransactionCount(`${add}`)
    const pi = (count - data.transfers.length * 2) / count
    const option = {
      flag: 'a',
    }
    var content = `${add}\n`
    if (pi > 0.618) {
      fs.writeFile('follow.txt', content, option, error => {
        if (error) {
          console.log('fs.writeFile failed err: ', error)
        }
      })
    }
    console.log(data.transfers.length, count, pi, add)
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
