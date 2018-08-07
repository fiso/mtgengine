"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HazmatSuitUsed extends UnimplementedCard {
  constructor (game) {
    super(game, "Hazmat Suit (Used)", "Unstable", "UST");
  }
}

module.exports = HazmatSuitUsed;
