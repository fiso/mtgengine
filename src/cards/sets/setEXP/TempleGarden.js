"use strict";
const Constants = require ("../../../Constants");
const TempleGardenBase = require("../setRAV/TempleGarden");

class TempleGarden extends TempleGardenBase {
  constructor(game) {
    super(game, "Temple Garden", "Zendikar Expedition", "EXP");
  }
}

module.exports = TempleGarden;
