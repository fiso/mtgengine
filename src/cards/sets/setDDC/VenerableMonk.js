"use strict";
const Constants = require ("../../../Constants");
const VenerableMonkBase = require("../set6ED/VenerableMonk");

class VenerableMonk extends VenerableMonkBase {
  constructor(game) {
    super(game, "Venerable Monk", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = VenerableMonk;
