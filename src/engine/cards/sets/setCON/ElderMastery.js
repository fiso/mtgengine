"use strict";
const Constants = require ("../../../Constants");
const ElderMasteryBase = require("../setDDH/ElderMastery");

class ElderMastery extends ElderMasteryBase {
  constructor (game) {
    super(game, "Elder Mastery", "Conflux", "CON");
  }
}

module.exports = ElderMastery;
