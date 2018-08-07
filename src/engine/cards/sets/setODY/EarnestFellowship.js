"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarnestFellowship extends UnimplementedCard {
  constructor (game) {
    super(game, "Earnest Fellowship", "Odyssey", "ODY");
  }
}

module.exports = EarnestFellowship;
