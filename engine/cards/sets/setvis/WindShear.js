"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindShear extends Card {
  constructor(game) {
    super(game, "Wind Shear", "Visions", "VIS");
  }
}

module.exports = WindShear;
