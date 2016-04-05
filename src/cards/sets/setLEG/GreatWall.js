"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Great Wall", "Legends", "LEG");
  }
}

module.exports = GreatWall;
