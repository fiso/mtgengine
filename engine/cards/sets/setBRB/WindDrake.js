"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindDrake extends Card {
  constructor(game) {
    super(game, "Wind Drake", "Battle Royale Box Set", "BRB");
  }
}

module.exports = WindDrake;
