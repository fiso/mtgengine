"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshipPlunderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyship Plunderer", "Aether Revolt", "AER");
  }
}

module.exports = SkyshipPlunderer;
