'use strict'

import { Alchemy, Network } from 'alchemy-sdk'
import fs from 'fs'

const config = {
  apiKey: 'pp6EhXuTrejJ3aIRaf5S9C4uHZ-5WDbO',
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(config)

// 读取json文件
let rawdata = fs.readFileSync('config.json')
let parse_rawdata = JSON.parse(rawdata)
let result = parse_rawdata
const arr = []
arr.push(result)

let start = 0
const chunkSize = 4

const processChunk = () => {
  const arrChunk = arr.slice(start, start + chunkSize)
  start += chunkSize
  const promises = arrChunk.map(i => {
    var address = Object.keys(i)
    return Promise.all(
      address.map((ADDRESS, index) => {
        return alchemy.core
          .getTransactionCount(`${ADDRESS}`)
          .then(result => [result, ADDRESS])
      }),
    )
  })

  return Promise.all(promises)
    .then(resultsArray => {
      const flattened = resultsArray.flat()
      flattened.forEach(([result, address]) => {
        var content = `${address}\n`
        const option = {
          flag: 'a',
        }
        console.log(result, address)
        if (result > 1000) {
          fs.writeFile('config.txt', content, option, error => {
            if (error) {
              console.log('fs.writeFile failed err: ', error)
            }
          })
        } else {
          fs.writeFile('result.txt', content, option, error => {
            if (error) {
              console.log('fs.writeFile failed err: ', error)
            }
          })
        }
      })
    })
    .catch(error => {
      console.log('there have some problem failed err:', error)
    })
}

const processAll = async () => {
  while (start < arr.length) {
    await processChunk()
  }
}

processAll()
