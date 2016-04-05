"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigilofSleep extends UnimplementedCard {
  constructor(game) {
    super(game, "Sigil of Sleep", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SigilofSleep;
