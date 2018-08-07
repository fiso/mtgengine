"use strict";
const Constants = require ("../../../Constants");
const ElvishHunterBase = require("../setME2/ElvishHunter");

class ElvishHunter extends ElvishHunterBase {
  constructor (game) {
    super(game, "Elvish Hunter", "Fallen Empires", "FEM");
  }
}

module.exports = ElvishHunter;
