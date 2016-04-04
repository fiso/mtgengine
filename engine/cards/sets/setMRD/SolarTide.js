"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SolarTide extends Card {
  constructor(game) {
    super(game, "Solar Tide", "Mirrodin", "MRD");
  }
}

module.exports = SolarTide;
