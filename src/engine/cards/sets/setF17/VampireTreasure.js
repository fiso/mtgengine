"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireTreasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire // Treasure", "Friday Night Magic 2017", "F17");
  }
}

module.exports = VampireTreasure;
