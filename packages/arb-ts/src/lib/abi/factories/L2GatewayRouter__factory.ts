/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2GatewayRouter } from '../L2GatewayRouter'

export class L2GatewayRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2GatewayRouter> {
    return super.deploy(overrides || {}) as Promise<L2GatewayRouter>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2GatewayRouter {
    return super.attach(address) as L2GatewayRouter
  }
  connect(signer: Signer): L2GatewayRouter__factory {
    return super.connect(signer) as L2GatewayRouter__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2GatewayRouter {
    return new Contract(address, _abi, signerOrProvider) as L2GatewayRouter
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newDefaultGateway',
        type: 'address',
      },
    ],
    name: 'DefaultGatewayUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'GatewaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userFrom',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'TransferRouted',
    type: 'event',
  },
  {
    inputs: [],
    name: 'STORAGE_GAP',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'getGateway',
    outputs: [
      {
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_counterpartGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_defaultGateway',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isRouter',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1TokenToGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newL2DefaultGateway',
        type: 'address',
      },
    ],
    name: 'setDefaultGateway',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_l1Token',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_gateway',
        type: 'address[]',
      },
    ],
    name: 'setGateway',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610f2e806100206000396000f3fe6080604052600436106100bd5760003560e01c8063a0c76a961161006f578063a0c76a9614610437578063a7e28d4814610510578063bda009fe14610543578063d2ce7d6514610576578063ed08fdc614610610578063f398744c14610643578063f7c9362f14610658576100bd565b806303295802146100c25780632db09c1c146100f35780632e567b36146101085780634201f98514610213578063485cc9551461034557806363851c31146103805780637b3a3c8b146103a9575b600080fd5b3480156100ce57600080fd5b506100d761068b565b604080516001600160a01b039092168252519081900360200190f35b3480156100ff57600080fd5b506100d761069a565b61019e600480360360a081101561011e57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561016057600080fd5b82018360208201111561017257600080fd5b803590602001918460018302840111600160201b8311171561019357600080fd5b5090925090506106a9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d85781810151838201526020016101c0565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021f57600080fd5b506103436004803603604081101561023657600080fd5b810190602081018135600160201b81111561025057600080fd5b82018360208201111561026257600080fd5b803590602001918460208302840111600160201b8311171561028357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102d257600080fd5b8201836020820111156102e457600080fd5b803590602001918460208302840111600160201b8311171561030557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506106ef945050505050565b005b34801561035157600080fd5b506103436004803603604081101561036857600080fd5b506001600160a01b038135811691602001351661083e565b34801561038c57600080fd5b5061039561084c565b604080519115158252519081900360200190f35b61019e600480360360808110156103bf57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156103f957600080fd5b82018360208201111561040b57600080fd5b803590602001918460018302840111600160201b8311171561042c57600080fd5b509092509050610851565b34801561044357600080fd5b5061019e600480360360a081101561045a57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561049c57600080fd5b8201836020820111156104ae57600080fd5b803590602001918460018302840111600160201b831117156104cf57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061086d945050505050565b34801561051c57600080fd5b506100d76004803603602081101561053357600080fd5b50356001600160a01b0316610915565b34801561054f57600080fd5b506100d76004803603602081101561056657600080fd5b50356001600160a01b0316610926565b61019e600480360360c081101561058c57600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156105d257600080fd5b8201836020820111156105e457600080fd5b803590602001918460018302840111600160201b8311171561060557600080fd5b5090925090506109fd565b34801561061c57600080fd5b506100d76004803603602081101561063357600080fd5b50356001600160a01b0316610c8a565b34801561064f57600080fd5b506100d7610ca5565b34801561066457600080fd5b506103436004803603602081101561067b57600080fd5b50356001600160a01b0316610cb4565b6003546001600160a01b031681565b6000546001600160a01b031681565b6040805162461bcd60e51b815260206004820152601460248201527327a7262cafa7aaaa2127aaa7222fa927aaaa22a960611b6044820152905160609181900360640190fd5b6106f833610d5d565b610744576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b805182511461074f57fe5b60005b82518110156108395781818151811061076757fe5b60200260200101516002600085848151811061077f57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106107d757fe5b60200260200101516001600160a01b03168382815181106107f457fe5b60200260200101516001600160a01b03167f812ca95fe4492a9e2d1f2723c2c40c03a60a27b059581ae20ac4e4d73bfba35460405160405180910390a3600101610752565b505050565b6108488282610d71565b5050565b600190565b606061086386868660008088886109fd565b9695505050505050565b6060848260405160200180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108c95781810151838201526020016108b1565b50505050905090810190601f1680156108f65780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190529a9950505050505050505050565b600061092082610d9f565b92915050565b6001600160a01b03808216600090815260026020526040902054166001811415610983576040805162461bcd60e51b815260206004820152600960248201526810931050d2d31254d560ba1b604482015290519081900360640190fd5b6001600160a01b03811661099f57506003546001600160a01b03165b6109b1816001600160a01b0316610e31565b6109f8576040805162461bcd60e51b81526020600482015260136024820152721393d7d1d0551155d05657d111541313d65151606a1b604482015290519081900360640190fd5b919050565b60606000610a0a89610926565b90506060610a518a338b8b89898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061086d92505050565b604080516001600160a01b0385811682529151929350818c169233928e16917f85291dff2161a93c2f12c819d31889c96c63042116f5bc5a205aa701c2c429f5919081900360200190a4816001600160a01b031663d2ce7d65348c8c8c8c8c886040518863ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b0316815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b3f578181015183820152602001610b27565b50505050905090810190601f168015610b6c5780820380516001836020036101000a031916815260200191505b509750505050505050506000604051808303818588803b158015610b8f57600080fd5b505af1158015610ba3573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f191682016040526020811015610bcd57600080fd5b8101908080516040519392919084600160201b821115610bec57600080fd5b908301906020820185811115610c0157600080fd5b8251600160201b811182820188101715610c1a57600080fd5b82525081516020918201929091019080838360005b83811015610c47578181015183820152602001610c2f565b50505050905090810190601f168015610c745780820380516001836020036101000a031916815260200191505b5060405250505092505050979650505050505050565b6002602052600090815260409020546001600160a01b031681565b6001546001600160a01b031681565b610cbd33610d5d565b610d09576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b600380546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f3a8f8eb961383a94d41d193e16a3af73eaddfd5764a4c640257323a1603ac3319181900360200190a150565b6000546001600160a01b0390811691161490565b610d7c826000610e37565b600380546001600160a01b0319166001600160a01b039290921691909117905550565b6000610daa82610926565b6001600160a01b031663a7e28d48836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610dff57600080fd5b505afa158015610e13573d6000803e3d6000fd5b505050506040513d6020811015610e2957600080fd5b505192915050565b3b151590565b6001600160a01b038216610e88576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615610ed5576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b50600080546001600160a01b0319166001600160a01b039290921691909117905556fea2646970667358221220486ad14d42940fa9cefa786e2c52e7cdce7434e35b2ab7e4ee632e3519c16ac564736f6c634300060b0033'
