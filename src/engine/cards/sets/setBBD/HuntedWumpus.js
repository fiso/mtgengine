"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntedWumpus extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunted Wumpus", "Battlebond", "BBD");
  }
}

module.exports = HuntedWumpus;
