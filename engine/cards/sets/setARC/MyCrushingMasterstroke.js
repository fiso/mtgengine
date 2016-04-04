"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyCrushingMasterstroke extends Card {
  constructor(game) {
    super(game, "My Crushing Masterstroke", "Archenemy", "ARC");
  }
}

module.exports = MyCrushingMasterstroke;
