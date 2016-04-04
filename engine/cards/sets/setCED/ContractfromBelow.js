"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContractfromBelow extends UnimplementedCard {
  constructor(game) {
    super(game, "Contract from Below", "Collector's Edition", "CED");
  }
}

module.exports = ContractfromBelow;
