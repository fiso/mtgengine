"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TaintedWoodBase = require("../setC15/TaintedWood.js");

class TaintedWood extends TaintedWoodBase {
  constructor(game) {
    super(game, "Tainted Wood", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = TaintedWood;
