import Unidata from 'unidata.js'
const unidata = new Unidata()

// FIXME https://github.com/NaturalSelectionLabs/Unidata/issues/7
// Github: https://github.com/NaturalSelectionLabs/Unidata
// Docs: https://unidata.app

const WALLET_ADDRESS = '0x4aA717ef6C31fd152aa5C4d2601eC22C27Da2b78'

// default
// const nfts = await unidata.assets.get({
//   source: 'Ethereum NFT',
//   identity: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944',
//   providers: ['OpenSea'],
// })

const nfts = await unidata.assets.get({
  source: 'Ethereum NFT',
  identity: `${WALLET_ADDRESS}`,
  providers: ['OpenSea'],
})

var stringify = JSON.stringify(nfts)
console.log(stringify);
