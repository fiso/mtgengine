"use strict";
const Constants = require ("../../../Constants");
const BloodfellCavesBase = require("../setFRF/BloodfellCaves");

class BloodfellCaves extends BloodfellCavesBase {
  constructor (game) {
    super(game, "Bloodfell Caves", "Khans of Tarkir", "KTK");
  }
}

module.exports = BloodfellCaves;
