"use strict";
const Constants = require ("../../../Constants");
const ContractfromBelowBase = require("../setCED/ContractfromBelow");

class ContractfromBelow extends ContractfromBelowBase {
  constructor(game) {
    super(game, "Contract from Below", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ContractfromBelow;
