
var Block = require("./model/Block")
var Blockchain = require("./model/BlockChain")

let jsChain = new Blockchain()
jsChain.addBlock(new Block("15/05/2019", { name: "kelly", designation: "android dev",amount: "$10000" }))
jsChain.addBlock(new Block("15/05/2017", { name: "vino", designation: "ios dev",amount: "$10000" }))
jsChain.addBlock(new Block("15/05/2017", { name: "madhav", designation: "web dev",amount: "$10000" }))
jsChain.addBlock(new Block("15/05/2017", { name: "jack", designation: "Ui/Ux",amount: "$8000" }))


console.log(JSON.stringify(jsChain, null, 4))
