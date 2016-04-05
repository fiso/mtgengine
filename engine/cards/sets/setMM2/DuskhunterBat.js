"use strict";
const Constants = require ("../../../Constants");
const DuskhunterBatBase = require("../setDDK/DuskhunterBat");

class DuskhunterBat extends DuskhunterBatBase {
  constructor(game) {
    super(game, "Duskhunter Bat", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DuskhunterBat;
