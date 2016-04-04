"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinArtisans extends Card {
  constructor(game) {
    super(game, "Goblin Artisans", "Antiquities", "ATQ");
  }
}

module.exports = GoblinArtisans;
