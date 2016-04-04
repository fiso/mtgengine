"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShriekingDrake extends Card {
  constructor(game) {
    super(game, "Shrieking Drake", "Visions", "VIS");
  }
}

module.exports = ShriekingDrake;
