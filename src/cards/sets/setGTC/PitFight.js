"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitFight extends UnimplementedCard {
  constructor (game) {
    super(game, "Pit Fight", "Gatecrash", "GTC");
  }
}

module.exports = PitFight;
