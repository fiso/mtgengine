"use strict";
const Constants = require ("../../../Constants");
const AcidicSlimeBase = require("../setC13/AcidicSlime");

class AcidicSlime extends AcidicSlimeBase {
  constructor(game) {
    super(game, "Acidic Slime", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = AcidicSlime;
