"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Pit Keeper", "Time Spiral", "TSP");
  }
}

module.exports = PitKeeper;
