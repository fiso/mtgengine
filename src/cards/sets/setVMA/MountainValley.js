"use strict";
const Constants = require ("../../../Constants");
const MountainValleyBase = require("../setMIR/MountainValley");

class MountainValley extends MountainValleyBase {
  constructor (game) {
    super(game, "Mountain Valley", "Vintage Masters", "VMA");
  }
}

module.exports = MountainValley;
