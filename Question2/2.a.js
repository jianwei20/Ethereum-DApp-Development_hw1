const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

const wallet = Wallet.generate();

//privKey
const privKey = wallet.getPrivateKey();
console.log("privKey(hex):",privKey.toString('hex'));

//pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey(hex):",pubKey.toString('hex'));

//address
const address = wallet.getAddressString();
console.log("address = ",address);


