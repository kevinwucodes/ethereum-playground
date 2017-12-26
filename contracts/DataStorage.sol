pragma solidity ^0.4.18;

contract DataStorage {

    /*struct Coord {
        int lat;
        int long;
    }*/

    struct UserStruct {
        // the index is how we track the user in userIndex array
        uint index;

        string name;
        /*Coord coord;*/
    }

    mapping (address => UserStruct) private userStructs;

    address[] private userIndex;


    function insert(address userAddress, string name) public returns (uint) {
        userStructs[userAddress].name = name;
        userStructs[userAddress].index = userIndex.push(userAddress) - 1;

        return userStructs[userAddress].index;
    }

    function getUserCount() public view returns (uint) {
        return userIndex.length;
    }

    function getUserAtIndex(uint index) public view returns (address) {
        return userIndex[index];
    }

    function getUserDetail(address _address)
        public
        view
        returns (
            uint index,
            string name
        ) {
        return (
            userStructs[_address].index,
            userStructs[_address].name
        );
    }
}
