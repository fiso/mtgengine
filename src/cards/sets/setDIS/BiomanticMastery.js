"use strict";
const Constants = require ("../../../Constants");
const BiomanticMasteryBase = require("../setC15/BiomanticMastery");

class BiomanticMastery extends BiomanticMasteryBase {
  constructor (game) {
    super(game, "Biomantic Mastery", "Dissension", "DIS");
  }
}

module.exports = BiomanticMastery;
