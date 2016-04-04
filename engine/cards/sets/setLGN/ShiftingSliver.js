"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShiftingSliver extends Card {
  constructor(game) {
    super(game, "Shifting Sliver", "Legions", "LGN");
  }
}

module.exports = ShiftingSliver;
