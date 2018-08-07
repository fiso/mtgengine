"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneArtisan extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Artisan", "Battlebond", "BBD");
  }
}

module.exports = ArcaneArtisan;
