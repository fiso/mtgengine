"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrapDigger extends UnimplementedCard {
  constructor(game) {
    super(game, "Trap Digger", "Scourge", "SCG");
  }
}

module.exports = TrapDigger;
