"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuskhunterBatBase = require("../setDDK/DuskhunterBat.js");

class DuskhunterBat extends DuskhunterBatBase {
  constructor(game) {
    super(game, "Duskhunter Bat", "Magic 2012", "M12");
  }
}

module.exports = DuskhunterBat;
