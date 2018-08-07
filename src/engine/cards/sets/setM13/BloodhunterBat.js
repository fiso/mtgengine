"use strict";
const Constants = require ("../../../Constants");
const BloodhunterBatBase = require("../setA25/BloodhunterBat");

class BloodhunterBat extends BloodhunterBatBase {
  constructor (game) {
    super(game, "Bloodhunter Bat", "Magic 2013", "M13");
  }
}

module.exports = BloodhunterBat;
