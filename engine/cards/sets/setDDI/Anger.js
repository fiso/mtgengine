"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Anger extends Card {
  constructor(game) {
    super(game, "Anger", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Anger;
