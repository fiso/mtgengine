"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RogueElephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue Elephant", "World Championship Decks 1997", "WC97");
  }
}

module.exports = RogueElephant;
