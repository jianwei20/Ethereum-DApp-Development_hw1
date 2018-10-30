## Homework description

### (20%) 1. Please compare hash function and cryptographic hash function and give an example.
## Answer
### hash function 是什麼？
一種從任何一種資料中建立小的數字「指紋」的方法。
**雜湊函式** 把訊息或資料 (key) 壓縮成摘要，使得資料量變小，將資料的格式固定下來。該函式將資料打亂 混合，重新建立一個叫做 **雜湊值（hash values，hash codes，hash sums，或hashes）** 的指紋。
這個雜湊值就當作是陣列的索引，資料就儲存在這個索引，資料就儲存在這個索引的位置中。
雜湊值通常用一個短的隨機字母和數字組成的字串來代表。

### hash function 性質
1. 運算速度快
2. **不可逆性**： 無法從雜湊值推回原本的資料是什麼
3. 如果兩個雜湊值是 **不相同** 的（根據同一函式），那麼這兩個雜湊值的原始輸入也是 **不相同** 的
4. 如果兩個雜湊值是 **相同** 的（根據同一函式），那麼這兩個雜湊值的原始輸入 **不一定** 是相同的

* **衝突 (collision)**
也就是 **第 2 種情況** 發生時就稱為「雜湊衝突」。好的雜湊函式在輸入域中很少出現雜湊衝突。在雜湊表和資料處理中，不抑制衝突來區別資料，會使得資料庫記錄更難找到。

* **hash distribution**
好的 hash function 所產生的 hash 值應盡可能均勻分佈
[hash distribution 系列實驗](http://softwareengineering.stackexchange.com/questions/49550/which-hashing-algorithm-is-best-for-uniqueness-and-speed)
![](https://i.imgur.com/wVTncXa.png)

