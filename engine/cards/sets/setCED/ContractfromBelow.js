"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ContractfromBelow extends Card {
  constructor(game) {
    super(game, "Contract from Below", "Collector's Edition", "CED");
  }
}

module.exports = ContractfromBelow;
