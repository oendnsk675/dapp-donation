
$( document ).ready(function(){
    let abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "tokenName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "tokenSymbol",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "NewDonation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractOwner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "donate",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDonationBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lastAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lastSendAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]

    let accountAddress = null
    let web3 = new Web3(window.web3.currentProvider)
    const contractAddress = "0x67b908C1B8763548E5113dC9DEc5D9c548eBe8e4"
    let balanceContainer = document.querySelector(".balance")
    let btnDonation = document.querySelector(".btn-donation")
    let inputDonation = document.querySelector(".input-donation")
    let accountInfo = document.querySelector(".account-info")
    let btn_connect = document.querySelector("#btn-connect")

    const donationBox = new web3.eth.Contract(abi, contractAddress)

    donationBox.events.NewDonation(() => {})
    .on("data", res => {
        getDonation()
        loading(false)
        $(btnDonation).empty().append('Donation')
        Swal.fire({
            text: res.returnValues.message,
            icon: 'success',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
    })
    
    getDonation()

    function getDonation(){
        donationBox.methods.getDonationBalance().call().then( result => {
            balanceContainer.innerHTML = web3.utils.fromWei(result, 'ether') + ' ETH'
        })
    }

    function handleAccountChanged(accounts) {

        if(accounts.length === 0){
            btn_connect.attributes.setNamedItem("disabled")
            Swal.fire({
                text: "Please connect to MetaMask Wallet",
                icon: 'warning'
            })
        }else if(accounts[0] !== accountAddress){
            loading(false)
            accountAddress = accounts[0]
            btn_connect.classList.add("hidden")
            accountInfo.classList.remove("hidden")
            $(".heading-account").removeClass("hidden")
            accountInfo.innerHTML = accountAddress
        }
    }
    
    function connect() {
        ethereum.request({method: 'eth_requestAccounts'})
        .then(handleAccountChanged)
        .catch((err) => {
            if(err.code == 4001){
                Swal.fire({
                    text: "Please connect to MetaMask Wallet",
                    icon: 'warning'
                })
            }else{
                console.log(err)
            }
        })
    }

    function sendDonation (value, from){
        try {
            donationBox.methods.donate().send({
                from,
                gas: 3000000,
                value, 
                gasPrice:0
            }).then(function(result) {
                 console.log(result)
            })
        } catch (err) {
            if(err.code == 4001){
                console.error(error.message);
            }
        }
    }

    function loading(state, action){
        if (state) {
            $(inputDonation).prop("disabled", true)
            $(btnDonation).prop("disabled", true)
            $(".container-donation").addClass("opacity-50")
            $(".container-donation").addClass("cursor-not-allowed")
            $(".inputDonation").addClass("cursor-not-allowed")
            $(".btnDonation").addClass("cursor-not-allowed")
        } else {
            $(inputDonation).prop("disabled", false)
            $(btnDonation).prop("disabled", false)
            $(".container-donation").removeClass("opacity-50")
            $(".container-donation").removeClass("cursor-not-allowed")
            $(".inputDonation").removeClass("cursor-not-allowed")
            $(".btnDonation").removeClass("cursor-not-allowed")
        }
    }

    function detectMetaMask(){
        if(window.ethereum == undefined){
            return false
        }else{
            return true
        }
    }

    let loader = `<!-- loader -->
    <div class="loader loader--style8" title="7">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <rect x="0" y="10" width="4" height="10" fill="#6a5acd" opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="8" y="10" width="4" height="10" fill="#6a5acd"  opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="16" y="10" width="4" height="10" fill="#6a5acd"  opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            </rect>
        </svg>
    </div>
    <!-- loader -->`

    loading(true)

    connect()

    btnDonation.addEventListener("click", () => {
        if(inputDonation.value != ""){
            // console.log(inputDonation.value)
            loading(true)
            $(btnDonation).empty().append(loader)
            let value = inputDonation.value
            sendDonation(value, accountAddress)
        }else{
            Swal.fire({
                text: 'Please fill in the donation amount first!',
                icon: 'warning'
            })
        }
    })

    btn_connect.addEventListener('click', () => {
        connect()
    })
})