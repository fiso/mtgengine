"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PartWater extends Card {
  constructor(game) {
    super(game, "Part Water", "Legends", "LEG");
  }
}

module.exports = PartWater;
