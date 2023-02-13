'use strict'

import { Alchemy, Network } from 'alchemy-sdk'
import fs from 'fs'

const config = {
  apiKey: 'KTHY6dSRDoYxkAMQo0EfNEfRBCRvMO1o',
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(config)

// 读取json文件
let rawdata = fs.readFileSync('config.json')
let parse_rawdata = JSON.parse(rawdata)
let result = parse_rawdata
const arr = []
arr.push(result)

function run() {
  return new Promise(async (resolve, reject) => {
    for (let i of arr) {
      var address = Object.keys(i)
      for (let index = 0; index < address.length; index++) {
        var ADDRESS = address[index]
        const data = await alchemy.core.getTransactionCount(`${ADDRESS}`)
        var content = `${ADDRESS}\n`
        const option = {
          flag: 'a',
        }

        console.log(data, ADDRESS)

        fs.readFile('config.json', 'utf8', (err, data) => {
          if (err) throw err
          let lines = data.split('\n')
          lines.splice(1, 1)
          let newData = lines.join('\n')
          fs.writeFile('config.json', newData, err => {
            if (err) throw err
          })
        })

        if (data > 200) {
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
      }
    }
    resolve()
  })
}

run()
  .then(() => {
    console.log('Loop start')
  })
  .catch(err => {
    console.error('get tx address failed err:', err)
  })
  .finally(() => {
    console.log('get tx completed')
  })
