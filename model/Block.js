
const SHA = require("crypto-js/sha256")

class Block {

    constructor(timestamp, data, prevHash) {
        this.index = generateIndex()
        this.timestamp = timestamp
        this.data = data
        this.prevHash = prevHash
        this.hash = this.generateHash()
        this.nonce = 0
    }

    generateIndex() {
        var result = ""
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz0123456789"
        var charLength = characters.length
        for (var i = 0; i < charLength; i++) {
            result += characters.charAt(Math.floor(i * charLength))
        }
        return result
    }

    generateHash() {
        return SHA(timestamp + JSON.stringify(data) + prevHash).toString
    }

}

module.exports = Block