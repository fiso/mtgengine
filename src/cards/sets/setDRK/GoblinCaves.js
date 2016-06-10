"use strict";
const Constants = require ("../../../Constants");
const GoblinCavesBase = require("../setME4/GoblinCaves");

class GoblinCaves extends GoblinCavesBase {
  constructor (game) {
    super(game, "Goblin Caves", "The Dark", "DRK");
  }
}

module.exports = GoblinCaves;
