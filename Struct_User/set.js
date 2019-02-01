const Web3 = require('web3')
var   Tx   = require('ethereumjs-tx')

const web3 = new Web3('https://ropsten.infura.io/{your infura key}') // Mettre la key infura, changer de reseau test si il le faut...

const account1 = '' // l'adresse de l'account

const privateKey1 = Buffer.from('' , 'hex') //mettre la private key de l'account

const contractAddress = '' //mettre l'adresse du contract deployé

const contractABI = [			//changer abi si modification du contract solidity
	{
		"constant": false,
		"inputs": [
			{
				"name": "_first",
				"type": "string"
			},
			{
				"name": "_last",
				"type": "string"
			}
		],
		"name": "setUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nb",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usr",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "first_name",
				"type": "string"
			},
			{
				"name": "last_name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

const contract = new web3.eth.Contract(contractABI, contractAddress)

//getTransaction afin de set, le mieux serais de calculer le cout du gas de la method solidity
web3.eth.getTransactionCount(account1, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: contractAddress,
    data: contract.methods.setUser("Test_first1", "Test_last2").encodeABI()
  }

  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
	})
});
