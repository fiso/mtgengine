"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshmouthHound extends Card {
  constructor(game) {
    super(game, "Ashmouth Hound", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = AshmouthHound;
