"use strict";
const Constants = require ("../../../Constants");
const DreadshipReefBase = require("../setCM2/DreadshipReef");

class DreadshipReef extends DreadshipReefBase {
  constructor (game) {
    super(game, "Dreadship Reef", "Legendary Cube", "PZ1");
  }
}

module.exports = DreadshipReef;
