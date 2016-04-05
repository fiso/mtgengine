"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SawtoothLoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Sawtooth Loon", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SawtoothLoon;
