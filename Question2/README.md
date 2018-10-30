#### (80%) 2. Peter is a noob in cryptocurrency and would like to get some Ethers. First step for him is to have an Ethereum account. He decides to generate an account and manages the wallet himself so he can understand the principles behind. From the class, he knows the account is created by the following steps:

 1. Create a keypair of private/public key
 2.	public_key = ECDSA(private_key) 
 3.	public_key_hash = Keccak-256(public_key)
 4.	address = `'0x'` + last 20 bytes of public_key_hash


 #### Reference 

 - [Create Full Ethereum Wallet, Keypair and Address](https://kobl.one/blog/create-full-ethereum-keypair-and-address/)
 - [How are ethereum addresses generated?](https://ethereum.stackexchange.com/questions/3542/how-are-ethereum-addresses-generated)


 #### (30%) a. Can you print the private/public key with hex string representation? Please give us an example.

I use .toString('hex') to change privKey and PubKey
 ```
 $ node 2.a.js
 ```

 ```
 privKey(hex): cdb35ff9d9459b876c19257137048f73194b3396f5fe927a22f8e4edcdb09420
 pubKey(hex): cbaf1937cfb5a308e96fb12eb52559f99b325e5c420fd97a103168dce5fefd9f9c0275c5bf61f0e4586e5c7bc932839c3baca13a220d0dbd343675fe82e36e5c
 address =  0xfd9714b3c991f1bb24f88dd9ba559fde4301b407
 ```

 #### (20%) b. In addition, if we don’t want to use the getAddressString() to get the address, how can we obtain the address by hashing the public key?
 ```
 $ node 2.b.js
 ```
 ```
pubKey: 9d163f25cbc4f43eb491ffb9ee117ed8b3e1e068ead004d5cc8612f1171d9e9b791f5759a11d4e55b9077f0881e963d8df03faceb98a9286200b3ee32d8521ce
 address by getAddressString(): 0xbfd045fe43b87ebc70234bf30886f5bb181c8585
 address by myself :0xbfd045fe43b87ebc70234bf30886f5bb181c8585
 ```

 #### (30%) c. There is a file called Keystore that is used to encrypt the private key and save in a JSON file. Can you generate a Keystore with the password "nccu"? You can find the details about Keystore below.
