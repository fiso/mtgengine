"use strict";
const Constants = require ("../../../Constants");
const TempleGardenBase = require("../setEXP/TempleGarden");

class TempleGarden extends TempleGardenBase {
  constructor (game) {
    super(game, "Temple Garden", "Return to Ravnica", "RTR");
  }
}

module.exports = TempleGarden;
