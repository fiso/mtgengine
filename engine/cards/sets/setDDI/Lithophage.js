"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lithophage extends Card {
  constructor(game) {
    super(game, "Lithophage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Lithophage;
