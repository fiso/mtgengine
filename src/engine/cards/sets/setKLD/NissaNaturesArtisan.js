"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissaNaturesArtisan extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa, Nature's Artisan", "Kaladesh", "KLD");
  }
}

module.exports = NissaNaturesArtisan;
