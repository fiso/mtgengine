"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thrull extends Card {
  constructor(game) {
    super(game, "Thrull", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Thrull;
