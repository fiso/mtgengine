"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SejiriRefugeBase = require("../setC13/SejiriRefuge.js");

class SejiriRefuge extends SejiriRefugeBase {
  constructor(game) {
    super(game, "Sejiri Refuge", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SejiriRefuge;
