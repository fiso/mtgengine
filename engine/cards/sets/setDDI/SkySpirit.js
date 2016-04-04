"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkySpirit extends Card {
  constructor(game) {
    super(game, "Sky Spirit", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SkySpirit;
