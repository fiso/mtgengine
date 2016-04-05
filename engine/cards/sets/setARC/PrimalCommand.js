"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalCommand extends UnimplementedCard {
  constructor(game) {
    super(game, "Primal Command", "Archenemy", "ARC");
  }
}

module.exports = PrimalCommand;
