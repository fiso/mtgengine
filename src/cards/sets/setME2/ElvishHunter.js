"use strict";
const Constants = require ("../../../Constants");
const ElvishHunterBase = require("../setFEM/ElvishHunter");

class ElvishHunter extends ElvishHunterBase {
  constructor (game) {
    super(game, "Elvish Hunter", "Masters Edition II", "ME2");
  }
}

module.exports = ElvishHunter;
