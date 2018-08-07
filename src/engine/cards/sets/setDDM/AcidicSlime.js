"use strict";
const Constants = require ("../../../Constants");
const AcidicSlimeBase = require("../setC18/AcidicSlime");

class AcidicSlime extends AcidicSlimeBase {
  constructor (game) {
    super(game, "Acidic Slime", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = AcidicSlime;
