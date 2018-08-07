"use strict";
const Constants = require ("../../../Constants");
const FlamekinVillageBase = require("../setCM2/FlamekinVillage");

class FlamekinVillage extends FlamekinVillageBase {
  constructor (game) {
    super(game, "Flamekin Village", "Commander 2014", "C14");
  }
}

module.exports = FlamekinVillage;
