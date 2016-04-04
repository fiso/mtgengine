"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HorizonCanopy extends Card {
  constructor(game) {
    super(game, "Horizon Canopy", "Future Sight", "FUT");
  }
}

module.exports = HorizonCanopy;
