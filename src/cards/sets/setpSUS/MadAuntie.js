"use strict";
const Constants = require ("../../../Constants");
const MadAuntieBase = require("../setMMA/MadAuntie");

class MadAuntie extends MadAuntieBase {
  constructor (game) {
    super(game, "Mad Auntie", "Junior Super Series", "PSUS");
  }
}

module.exports = MadAuntie;
