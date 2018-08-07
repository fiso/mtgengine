"use strict";
const Constants = require ("../../../Constants");
const TaintedWoodBase = require("../setCMA/TaintedWood");

class TaintedWood extends TaintedWoodBase {
  constructor (game) {
    super(game, "Tainted Wood", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = TaintedWood;
