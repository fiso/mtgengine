"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinArtisans extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Artisans", "Antiquities", "ATQ");
  }
}

module.exports = GoblinArtisans;
