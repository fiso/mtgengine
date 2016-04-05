"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofEarth extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Earth", "Legends", "LEG");
  }
}

module.exports = WallofEarth;
