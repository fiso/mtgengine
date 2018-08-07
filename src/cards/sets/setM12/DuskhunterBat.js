"use strict";
const Constants = require ("../../../Constants");
const DuskhunterBatBase = require("../setMM2/DuskhunterBat");

class DuskhunterBat extends DuskhunterBatBase {
  constructor (game) {
    super(game, "Duskhunter Bat", "Magic 2012", "M12");
  }
}

module.exports = DuskhunterBat;
