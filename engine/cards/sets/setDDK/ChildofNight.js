"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChildofNight extends Card {
  constructor(game) {
    super(game, "Child of Night", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ChildofNight;
