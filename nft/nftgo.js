// sales + sends + burns / mints + received + buys = percent

const fs = require('fs')
const sdk = require('api')('@nftgo/v2.0#ulug34clc4nnbsw')

sdk.auth('22f54a4d-fe18-4089-9ad7-e2499b168f42')

const sleep = ms => new Promise(r => setTimeout(r, ms))

// 读取json文件
let rawdata = fs.readFileSync('config.json')
let parse_rawdata = JSON.parse(rawdata)
let result = parse_rawdata
const arr = []
arr.push(result)

for (let i of arr) {
  var address = Object.keys(i)
  for (let index = 0; index < 2; index++) {
    sleep(1000)
    var ADDRESS = address[index]
    sdk
      .get_metrics_eth_v2_address_metrics_get({
        address: `${ADDRESS}`,
      })
      .then(({ data }) => {
        var activity = data['activity_num']
        var sales = data['sell_num']
        var sends = data['send_num']
        var burns = data['burn_num']
        var received = data['receive_num']
        var mints = data['mint_num']
        var buys = data['buy_num']
        var percent = (sales + sends + burns) / (mints + received + buys)
        console.log(
          'activity = ' +
            activity +
            ' percent = ' +
            percent +
            ' address = ' +
            address[index],
        )
        // 通过判断写入文件
        if (activity > 2222) {
          if (percent > 0.693) {
            var content = `${ADDRESS}\n`
            const option = {
              flag: 'a',
            }
            fs.writeFile('config.txt', content, option, error => {
              if (error) {
                console.log('fs.writeFile failed err: ', error)
              }
            })
          }
        }
      })
      .catch(err => console.error(err))
  }
}
