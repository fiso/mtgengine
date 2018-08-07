"use strict";
const Constants = require ("../../../Constants");
const MountainValleyBase = require("../setC18/MountainValley");

class MountainValley extends MountainValleyBase {
  constructor (game) {
    super(game, "Mountain Valley", "Vintage Masters", "VMA");
  }
}

module.exports = MountainValley;
