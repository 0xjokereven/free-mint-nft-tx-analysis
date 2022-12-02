import Unidata from 'unidata.js'
const unidata = new Unidata()

// FIXME https://github.com/NaturalSelectionLabs/Unidata/issues/7
// Github: https://github.com/NaturalSelectionLabs/Unidata
// Docs: https://unidata.app
// http://localhost:3000/api/unidate
const nfts = await unidata.assets.get({
  source: 'Ethereum NFT',
  identity: '0xC8b960D09C0078c18Dcbe7eB9AB9d816BcCa8944',
  providers: ['OpenSea'],
})

console.log(nfts)
