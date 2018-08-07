"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlintSleeveArtisan extends UnimplementedCard {
  constructor (game) {
    super(game, "Glint-Sleeve Artisan", "Kaladesh", "KLD");
  }
}

module.exports = GlintSleeveArtisan;
