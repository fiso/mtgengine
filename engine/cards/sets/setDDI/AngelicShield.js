"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicShield extends Card {
  constructor(game) {
    super(game, "Angelic Shield", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AngelicShield;
