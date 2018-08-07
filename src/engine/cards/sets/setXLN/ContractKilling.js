"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContractKilling extends UnimplementedCard {
  constructor (game) {
    super(game, "Contract Killing", "Ixalan", "XLN");
  }
}

module.exports = ContractKilling;
