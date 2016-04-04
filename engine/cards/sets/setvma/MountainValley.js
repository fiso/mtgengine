"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MountainValleyBase = require("../setMIR/MountainValley.js");

class MountainValley extends MountainValleyBase {
  constructor(game) {
    super(game, "Mountain Valley", "Vintage Masters", "VMA");
  }
}

module.exports = MountainValley;
