module.exports = {
  address: '0x75e59c0b2651e0b3adc56af75143f7bf754096d9',
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
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'result', type: 'uint256' },
        { indexed: false, name: 'name', type: 'string' }
      ],
      name: 'ResultEvent',
      type: 'event'
    }
  ]
}
