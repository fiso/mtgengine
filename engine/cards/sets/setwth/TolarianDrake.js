"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TolarianDrake extends Card {
  constructor(game) {
    super(game, "Tolarian Drake", "Weatherlight", "WTH");
  }
}

module.exports = TolarianDrake;
