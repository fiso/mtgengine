"use strict";
const Constants = require ("../../../Constants");
const BudokaPupilBase = require("../setBOK/BudokaPupil");

class BudokaPupil extends BudokaPupilBase {
  constructor(game) {
    super(game, "Budoka Pupil", "Release Events", "pREL");
  }
}

module.exports = BudokaPupil;
