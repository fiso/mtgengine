"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ContractfromBelowBase = require("../setCED/ContractfromBelow.js");

class ContractfromBelow extends ContractfromBelowBase {
  constructor(game) {
    super(game, "Contract from Below", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ContractfromBelow;
