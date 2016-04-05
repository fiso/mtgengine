"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setBRB/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor(game) {
    super(game, "Nekrataal", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Nekrataal;
