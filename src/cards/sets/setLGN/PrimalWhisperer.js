"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalWhisperer extends UnimplementedCard {
  constructor(game) {
    super(game, "Primal Whisperer", "Legions", "LGN");
  }
}

module.exports = PrimalWhisperer;
