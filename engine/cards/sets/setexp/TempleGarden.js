"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TempleGardenBase = require("../setRAV/TempleGarden.js");

class TempleGarden extends TempleGardenBase {
  constructor(game) {
    super(game, "Temple Garden", "Zendikar Expedition", "EXP");
  }
}

module.exports = TempleGarden;
