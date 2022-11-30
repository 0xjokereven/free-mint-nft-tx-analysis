import { Get, JsonController, Param } from 'routing-controllers'
import { Service } from 'typedi'
import Web3 from 'web3'

// references
// https://github.com/web3/web3.js/blob/1.x/docs/web3-eth-contract.rst

const ALCHEMY_PRODUCT_ID = process.env.ALCHEMY_PRODUCT_ID
const INFURA_PRODUCT_ID = process.env.INFURA_PRODUCT_ID

const web3 = new Web3(
  Web3.givenProvider || `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_PRODUCT_ID}`,
)

function GetBackupWeb3() {
  return new Web3(
    Web3.givenProvider || `wss://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_PRODUCT_ID}`,
  )
}

// time transition
function time_trans(date) {
  var date: any = new Date(date * 1000)
  var Y = date.getFullYear() + '-'
  var M =
    (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + h + m + s
}

@JsonController()
@Service()
export class TxController {
  // http://localhost:3000/api/get_tx/0x049149be4927a543a993fb3c5eacc455b15ccc798159de98203fbb8ac819a74a
  @Get('/get_tx/:hash')
  async getTxByHash(@Param('hash') hash: string) {
    var result = await GetBackupWeb3().eth.getTransaction(hash)
    var stringify = JSON.stringify(result)
    var transaction_details = JSON.parse(stringify)
    return {
      transaction_details: transaction_details,
    }
  }

  // http://localhost:3000/api/get_tx_receipt/0x049149be4927a543a993fb3c5eacc455b15ccc798159de98203fbb8ac819a74a
  @Get('/get_tx_receipt/:hash')
  async getTxReceiptyHash(@Param('hash') hash: string) {
    var result = await GetBackupWeb3().eth.getTransactionReceipt(hash)
    var stringify = JSON.stringify(result)
    var transaction_receipt_details = JSON.parse(stringify)
    return {
      transaction_receipt_details: transaction_receipt_details,
    }
  }

  // http://localhost:3000/api/get_block/16075677
  @Get('/get_block/:num')
  async getBlock(@Param('num') num: number) {
    var block = await GetBackupWeb3().eth.getBlock(num)
    var stringify = JSON.stringify(block)
    var block_details = JSON.parse(stringify)
    return { block_details: block_details }
  }

  // http://localhost:3000/api/get_block_time_stamp/16075677
  @Get('/get_block_time_stamp/:num')
  async getBlockTimeStamp(@Param('num') num: number) {
    var block = await GetBackupWeb3().eth.getBlock(num)
    var time_stamp = Number(block.timestamp)
    var date = time_trans(time_stamp)
    return {
      time_stamp: date,
    }
  }

  // http://localhost:3000/api/other_tx_info
  @Get('/other_tx_info')
  async getOtherTxInfo() {
    // FIXME why all undefined
    var default_account = GetBackupWeb3().eth.defaultAccount // null
    var default_block = GetBackupWeb3().eth.defaultBlock // latest
    var default_hard_fork = GetBackupWeb3().eth.defaultHardfork // undefined
    var default_chain = GetBackupWeb3().eth.defaultChain // undefined
    var default_common = GetBackupWeb3().eth.defaultCommon // undefined
    var tx_block_timeout = GetBackupWeb3().eth.transactionBlockTimeout // 50
    var tx_confirm_block = GetBackupWeb3().eth.transactionConfirmationBlocks // 24
    var tx_poll_timeout = GetBackupWeb3().eth.transactionPollingTimeout // 750
    var handle_revert = GetBackupWeb3().eth.handleRevert // false
    // maxListenersWarningThreshold
    var protoc_version = await GetBackupWeb3().eth.getProtocolVersion() // 0x41 65
    // isSyncing
    var node_info = await GetBackupWeb3().eth.getNodeInfo() // Geth/v1.10.26-stable-e5eb32ac/linux-amd64/go1.18.8
    // getCoinbase
    // isMining
    // getHashrate
    var gas_price = await GetBackupWeb3().eth.getGasPrice() // 10453319004
    // getFeeHistory
    var get_account = await GetBackupWeb3().eth.getAccounts() // []
    var block_number = await GetBackupWeb3().eth.getBlockNumber() // 16076488

    // 0x690b9a9e9aa1c9db991c7721a92d351db4fac990
    var get_balance = await GetBackupWeb3().eth.getBalance(
      '0x690b9a9e9aa1c9db991c7721a92d351db4fac990',
    )
    var balance = GetBackupWeb3().utils.fromWei(`${get_balance}`, 'ether') //1.967113130944898484

    // getStorageAt
    // getCode
    // getBlockTransactionCount
    // getUncle
    // getTransactionFromBlock
    // getTransactionCount

    // TODO sendTransaction
    // compiled solidity source code using https://remix.ethereum.org

    // sendSignedTransaction

    // wallet
    var wallet = GetBackupWeb3().eth.accounts.wallet

    // FIXME need key
    // var sign = await GetBackupWeb3().eth.sign(
    //   web3.utils.utf8ToHex('Hello World'),
    //   '0x690b9a9e9aa1c9db991c7721a92d351db4fac990',
    // )

    // OPTIMIZE sign see result in asign.json
    // var asing = GetBackupWeb3().eth.accounts.sign(
    //   'Hello World',
    //   'wallet private key',
    // )

    // signTransaction
    // call
    // estimateGas

    // []
    await GetBackupWeb3()
      .eth.getPastLogs({
        fromBlock: '16080200',
        toBlock: '16080400',
        address: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
        topics: [],
      })
      .then(d => {
        console.log(d)
      })
      .catch(e => {
        console.log(e)
      })

    // getWork
    // submitWork
    // requestAccounts
    // getChainId
    // getProof
    // createAccessList

    // more...
    return {
      default_account: default_account,
      default_block: default_block,
      default_hard_fork: default_hard_fork,
      default_chain: default_chain,
      default_common: default_common,
      tx_block_timeout: tx_block_timeout,
      tx_confirm_block: tx_confirm_block,
      tx_poll_timeout: tx_poll_timeout,
      handle_revert: handle_revert,
      protoc_version: protoc_version,
      gas_price: gas_price,
      get_account: get_account,
      block_number: block_number,
      balance: balance,
      node_info: node_info,
    }
  }
}
