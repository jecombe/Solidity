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

//fonction pour savoir le nombre de structure grace a la varaible public de solidity
contract.methods.nb().call(function(err, res){
  var print = res - 1;
 console.log('Structure total: ' + print);
B(res)
});

//Fonction pour get le contract solidity en fonction du nombre de structure
function B(r)
{
  var b = 0;
    while (b != r)
      {
        //methods get solidity
        contract.methods.get(b).call().then( result => {
	         console.log("user avec id numero", result[0], "prenom ", result[1], "nom ", result[2], "nombre", r);
         }).catch(error => {
	          console.error(error);
        });
      b++;
    }
}
