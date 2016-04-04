"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ContractfromBelowBase = require("../setCED/ContractfromBelow.js");

class ContractfromBelow extends ContractfromBelowBase {
  constructor(game) {
    super(game, "Contract from Below", "Revised Edition", "3ED");
  }
}

module.exports = ContractfromBelow;
