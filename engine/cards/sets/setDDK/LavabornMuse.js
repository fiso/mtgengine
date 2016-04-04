"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavabornMuse extends Card {
  constructor(game) {
    super(game, "Lavaborn Muse", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = LavabornMuse;
