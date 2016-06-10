"use strict";
const Constants = require ("../../../Constants");
const MoldShamblerBase = require("../setC13/MoldShambler");

class MoldShambler extends MoldShamblerBase {
  constructor (game) {
    super(game, "Mold Shambler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MoldShambler;
