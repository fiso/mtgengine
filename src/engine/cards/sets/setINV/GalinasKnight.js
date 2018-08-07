"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalinasKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Galina's Knight", "Invasion", "INV");
  }
}

module.exports = GalinasKnight;
