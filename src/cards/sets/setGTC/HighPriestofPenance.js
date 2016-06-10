"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighPriestofPenance extends UnimplementedCard {
  constructor (game) {
    super(game, "High Priest of Penance", "Gatecrash", "GTC");
  }
}

module.exports = HighPriestofPenance;
