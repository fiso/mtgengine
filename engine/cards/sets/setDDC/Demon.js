"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Demon extends Card {
  constructor(game) {
    super(game, "Demon", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Demon;
