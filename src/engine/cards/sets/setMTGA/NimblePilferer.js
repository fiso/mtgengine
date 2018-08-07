"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimblePilferer extends UnimplementedCard {
  constructor (game) {
    super(game, "Nimble Pilferer", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = NimblePilferer;
