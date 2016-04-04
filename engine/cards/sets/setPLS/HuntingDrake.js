"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntingDrake extends Card {
  constructor(game) {
    super(game, "Hunting Drake", "Planeshift", "PLS");
  }
}

module.exports = HuntingDrake;
