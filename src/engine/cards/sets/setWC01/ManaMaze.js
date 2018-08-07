"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaMaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Maze", "World Championship Decks 2001", "WC01");
  }
}

module.exports = ManaMaze;
