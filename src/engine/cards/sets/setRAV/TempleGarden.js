"use strict";
const Constants = require ("../../../Constants");
const TempleGardenBase = require("../setEXP/TempleGarden");

class TempleGarden extends TempleGardenBase {
  constructor (game) {
    super(game, "Temple Garden", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TempleGarden;
