"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InventorsGoggles extends UnimplementedCard {
  constructor (game) {
    super(game, "Inventor's Goggles", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = InventorsGoggles;
