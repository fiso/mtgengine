"use strict";
const Constants = require ("../../../Constants");
const AzoriusChanceryBase = require("../setC13/AzoriusChancery");

class AzoriusChancery extends AzoriusChanceryBase {
  constructor(game) {
    super(game, "Azorius Chancery", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AzoriusChancery;
