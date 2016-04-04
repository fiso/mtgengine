"use strict";
const Constants = require ("../../../Constants");
const TempleGardenBase = require("../setRAV/TempleGarden");

class TempleGarden extends TempleGardenBase {
  constructor(game) {
    super(game, "Temple Garden", "Return to Ravnica", "RTR");
  }
}

module.exports = TempleGarden;
