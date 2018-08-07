"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunClasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Sun Clasp", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SunClasp;
