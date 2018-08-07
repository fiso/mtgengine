"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinArtisans extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Artisans", "Chronicles", "CHR");
  }
}

module.exports = GoblinArtisans;
