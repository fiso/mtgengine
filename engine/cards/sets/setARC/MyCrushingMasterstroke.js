"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyCrushingMasterstroke extends UnimplementedCard {
  constructor(game) {
    super(game, "My Crushing Masterstroke", "Archenemy", "ARC");
  }
}

module.exports = MyCrushingMasterstroke;
