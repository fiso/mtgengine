"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzoriusChanceryBase = require("../setC13/AzoriusChancery.js");

class AzoriusChancery extends AzoriusChanceryBase {
  constructor(game) {
    super(game, "Azorius Chancery", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AzoriusChancery;
