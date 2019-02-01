pragma solidity ^0.5.0;

contract SaveUser {
    uint public nb;

    constructor() public{
        nb = 0;
    }
    struct User{
        uint id;
        string first_name;
        string last_name;
    }

    User[] public usr;

  function setUser(string memory _first, string memory _last) public {
      nb++;
    User memory ur = User(nb, _first, _last);
    usr.push(ur);
  }

  function get(uint i) public view returns (uint, string memory, string memory) {
    return (usr[i].id, usr[i].first_name, usr[i].last_name);
  }
}
