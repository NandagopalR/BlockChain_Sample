
var Block = require("./Block")

class BlockChain {
    constructor() {
        this.blockchain = []
    }

    latestBlock() {
        return this.blockchain[this.blockchain.length - 1]
    }

    addBlock(newBlock) {
        newBlock.prevHash = this.latestBlock() != null ? this.latestBlock().hash : 0
        newBlock.hash = newBlock.generateHash()
        this.blockchain.push(newBlock)
    }

}
module.exports = BlockChain;
