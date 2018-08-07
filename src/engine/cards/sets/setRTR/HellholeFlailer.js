"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellholeFlailer extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellhole Flailer", "Return to Ravnica", "RTR");
  }
}

module.exports = HellholeFlailer;
