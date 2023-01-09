'use strict'

import { Alchemy, Network } from 'alchemy-sdk'
import fs from 'fs'

const config = {
  apiKey: 'KTHY6dSRDoYxkAMQo0EfNEfRBCRvMO1o',
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(config)

// mint count
var mint_count = 0

// 读取json文件
let rawdata = fs.readFileSync('config.json')
let parse_rawdata = JSON.parse(rawdata)
let result = parse_rawdata
const arr = []
arr.push(result)

for (let i of arr) {
  var address = Object.keys(i)
  for (let index = 0; index < address.length; index++) {
    var ADDRESS = address[index]
    const data = await alchemy.core.getAssetTransfers({
      fromBlock: '0x0',
      fromAddress: `${ADDRESS}`,
      category: ['erc721', 'erc1155'],
    })
    const mint = await alchemy.core.getAssetTransfers({
      fromBlock: '0x0',
      fromAddress: '0x0000000000000000000000000000000000000000',
      toAddress: `${ADDRESS}`,
      excludeZeroValue: true,
      category: ['erc721', 'erc1155'],
    })
    // how much have to mint
    // Print contract address and tokenId for each NFT (ERC721 or ERC1155):
    for (const events of mint.transfers) {
      if (events.erc1155Metadata == null) {
        mint_count++
      } else {
        for (const erc1155 of events.erc1155Metadata) {
          mint_count++
        }
      }
    }
    var ef = data.transfers.length
    var edd = ef / mint_count
    var content = `${ADDRESS}\n`
    const option = {
      flag: 'a',
    }
    console.log(edd, ADDRESS)
    if (edd > 0.2) {
      fs.writeFile('config.txt', content, option, error => {
        if (error) {
          console.log('fs.writeFile failed err: ', error)
        }
      })
    }
  }
}
