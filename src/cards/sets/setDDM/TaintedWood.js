"use strict";
const Constants = require ("../../../Constants");
const TaintedWoodBase = require("../setC15/TaintedWood");

class TaintedWood extends TaintedWoodBase {
  constructor(game) {
    super(game, "Tainted Wood", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = TaintedWood;
