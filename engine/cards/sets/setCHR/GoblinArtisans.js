"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinArtisansBase = require("../setATQ/GoblinArtisans.js");

class GoblinArtisans extends GoblinArtisansBase {
  constructor(game) {
    super(game, "Goblin Artisans", "Chronicles", "CHR");
  }
}

module.exports = GoblinArtisans;
