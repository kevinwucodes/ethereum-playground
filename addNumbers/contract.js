module.exports = {
  address: '0x22f0849104cca4b630b1b2ec42580be11d0193f5',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'getResult',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: 'a', type: 'uint256' }, { name: 'b', type: 'uint256' }],
      name: 'addNumbers',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
}
