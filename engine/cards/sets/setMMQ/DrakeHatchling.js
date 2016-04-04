"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrakeHatchling extends Card {
  constructor(game) {
    super(game, "Drake Hatchling", "Mercadian Masques", "MMQ");
  }
}

module.exports = DrakeHatchling;
