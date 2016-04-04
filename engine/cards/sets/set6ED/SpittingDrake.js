"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpittingDrake extends Card {
  constructor(game) {
    super(game, "Spitting Drake", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SpittingDrake;
