"use strict";
const Constants = require ("../../../Constants");
const ContractfromBelowBase = require("../setCED/ContractfromBelow");

class ContractfromBelow extends ContractfromBelowBase {
  constructor (game) {
    super(game, "Contract from Below", "International Collector's Edition", "CEI");
  }
}

module.exports = ContractfromBelow;
