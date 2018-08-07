"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieArtisans extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Artisans", "You Make the Cube", "PZ2");
  }
}

module.exports = FaerieArtisans;
