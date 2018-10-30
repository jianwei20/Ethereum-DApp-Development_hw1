### What is HD Wallet, BIP32, BIP39 and BIP44? (+2%)

BIP 全名是 Bitcoin Improvement Proposals，是提出 Bitcoin 的新功能或改進措施的文件。可由任何人提出，經過審核後公佈在 bitcoin/bips 上。BIP 和 Bitcoin 的關係，就像是 RFC 之於 Internet。
而其中的 BIP32, BIP39, BIP44 共同定義了目前被廣泛使用的 HD Wallet，包含其設計動機和理念、實作方式、實例等。
```
BIP32：定義 Hierarchical Deterministic wallet (簡稱 “HD Wallet”)，是一個系統可以從單一個 seed 產生一樹狀結構儲存多組 keypairs（私鑰和公鑰）。好處是可以方便的備份、轉移到其他相容裝置（因為都只需要 seed），以方法及分層的權限控制等。
```
```
BIP39：將 seed 用方便記憶和書寫的單字表示。一般由 12 個單字組成，稱為 mnemonic code(phrase)，中文稱為助記詞或助記碼
```
```
基於 BIP44 的系統，賦予樹狀結構中的各層特殊的意義。讓同一個 seed 可以支援多幣種、多帳戶等。
```
Ethereum HD Wallet
Ethereum 的錢包目前均採用以上 Bitcoin HD Wallet 的架構，並訂 coin_type' 為 60'，可以在 ethereum/EIPs/issues 中看到相關的討論。舉例來說，在一個 Ethereum HD Wallet 中，第一個帳戶（這裡的帳戶指 BIP44 中定義的 account'）的第一組 keypair，其路徑會是 m/44'/60'/0'/0/0。



### What is RFC 6979 for? (+2%)
k值對於比特幣是非常重要(不僅僅是比特幣，對於整個橢圓曲線家族來說都是如此)
暴漏k值(簽名)相當於暴漏私鑰，因此：
**k值必須是保密且唯一的，並不一定必須隨機!**
由於歷史上發生過太多次偽隨機數失敗案例，有人想出了一種用“確定性”方式來產生k值的方法，同樣保證了“保密”且“唯一”，最後成為一個編號為6979的規範，即：RFC6979。
為了確定性的產生保密且唯一的k值，我們先試著寫出這麼一個簡單的公式：
```
k = SHA256(d + HASH(m));

d是私鑰，m是消息，我們一般會對消息的HASH進行簽名，因此這裡是HASH(m)。
```
其實只需要這麼個簡單的公式就足夠滿足需求了，因為參數里有私鑰d，就保證了“保密”，再加上消息m，保證了“唯一”，這也是“確定性”的算法，只要SHA256是安全的，此算法就是安全的，很完美。

如果僅僅是針對比特幣而言，這個公式已經很好了，但考慮到RFC6979面向的是密碼學(不僅僅是比特幣)的統一規範，要考慮更多的複雜情況(更多曲線、更多參數、更多算法等)，因此，實際上的RFC6979要比上述公式複雜得多，代碼實現起來也要多得多。

要用私鑰來保證**保密**，要用消息來保證**唯一**，再使用確定的、不可逆的來進行運算，最終計算出來的k值就是安全的。
通過使用RFC6979，我們就可以有效降低比特幣簽名對於隨機數品質的要求



Reference
- (https://medium.com/taipei-ethereum-meetup/虛擬貨幣錢包-從-bip32-bip39-bip44-到-ethereum-hd-ｗallet-a40b1c87c1f7)

- (http://www.wanbizu.com/baike/201412083991.html)
