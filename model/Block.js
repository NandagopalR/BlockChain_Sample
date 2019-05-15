
const SHA = require("crypto-js/sha256")

class Block {

    constructor(timestamp, data, prevHash) {
        this.index = this.generateIndex(10)
        this.timestamp = timestamp
        this.data = data
        this.previousHash = prevHash
        this.hash = this.generateHash()
        this.nonce = 0
    }

    generateIndex(length) {
        var result = ""
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz0123456789"
        var charLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charLength))
        }
        return result
    }

    generateHash() {
        return SHA(this.timestamp + JSON.stringify(this.data) + this.prevHash).toString()
    }

}

module.exports = Block