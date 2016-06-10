"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSkycutter extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Skycutter", "Time Spiral", "TSP");
  }
}

module.exports = GoblinSkycutter;
