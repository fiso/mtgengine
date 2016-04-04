"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Wind Drake", "Battle Royale Box Set", "BRB");
  }
}

module.exports = WindDrake;
