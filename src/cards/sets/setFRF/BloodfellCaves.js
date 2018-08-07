"use strict";
const Constants = require ("../../../Constants");
const BloodfellCavesBase = require("../setC17/BloodfellCaves");

class BloodfellCaves extends BloodfellCavesBase {
  constructor (game) {
    super(game, "Bloodfell Caves", "Fate Reforged", "FRF");
  }
}

module.exports = BloodfellCaves;
