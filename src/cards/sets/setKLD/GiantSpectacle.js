"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantSpectacle extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Spectacle", "Kaladesh", "KLD");
  }
}

module.exports = GiantSpectacle;
