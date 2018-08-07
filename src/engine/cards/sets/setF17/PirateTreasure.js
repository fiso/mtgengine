"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PirateTreasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Pirate // Treasure", "Friday Night Magic 2017", "F17");
  }
}

module.exports = PirateTreasure;
