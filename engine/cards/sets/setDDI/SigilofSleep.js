"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SigilofSleep extends Card {
  constructor(game) {
    super(game, "Sigil of Sleep", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SigilofSleep;
