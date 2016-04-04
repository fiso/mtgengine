"use strict";
const Constants = require ("../../../Constants");
const GoblinArtisansBase = require("../setATQ/GoblinArtisans");

class GoblinArtisans extends GoblinArtisansBase {
  constructor(game) {
    super(game, "Goblin Artisans", "Chronicles", "CHR");
  }
}

module.exports = GoblinArtisans;
