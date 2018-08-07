"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GluttonousSlime extends UnimplementedCard {
  constructor (game) {
    super(game, "Gluttonous Slime", "Planechase Anthology", "PCA");
  }
}

module.exports = GluttonousSlime;
