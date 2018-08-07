"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PithingNeedle extends UnimplementedCard {
  constructor (game) {
    super(game, "Pithing Needle", "Kaladesh Inventions", "MPS");
  }
}

module.exports = PithingNeedle;
