"use strict";
const Constants = require ("../../../Constants");
const GoblinArtisansBase = require("../setCHR/GoblinArtisans");

class GoblinArtisans extends GoblinArtisansBase {
  constructor (game) {
    super(game, "Goblin Artisans", "Antiquities", "ATQ");
  }
}

module.exports = GoblinArtisans;
