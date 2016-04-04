"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavabornMuse extends UnimplementedCard {
  constructor(game) {
    super(game, "Lavaborn Muse", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = LavabornMuse;
