const Wallet = require('ethereumjs-wallet');

const newWallet = Wallet.generate('nccu')
console.log(newWallet.toV3String('nccu'))
