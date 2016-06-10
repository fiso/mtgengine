"use strict";
const Constants = require ("../../../Constants");
const OverruleBase = require("../setDIS/Overrule");

class Overrule extends OverruleBase {
  constructor (game) {
    super(game, "Overrule", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Overrule;
