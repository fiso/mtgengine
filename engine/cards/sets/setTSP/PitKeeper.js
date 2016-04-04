"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PitKeeper extends Card {
  constructor(game) {
    super(game, "Pit Keeper", "Time Spiral", "TSP");
  }
}

module.exports = PitKeeper;
