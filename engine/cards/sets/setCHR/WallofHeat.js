"use strict";
const Constants = require ("../../../Constants");
const WallofHeatBase = require("../setBRB/WallofHeat");

class WallofHeat extends WallofHeatBase {
  constructor(game) {
    super(game, "Wall of Heat", "Chronicles", "CHR");
  }
}

module.exports = WallofHeat;
