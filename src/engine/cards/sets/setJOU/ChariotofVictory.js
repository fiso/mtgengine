"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChariotofVictory extends UnimplementedCard {
  constructor (game) {
    super(game, "Chariot of Victory", "Journey into Nyx", "JOU");
  }
}

module.exports = ChariotofVictory;
