"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrushstrokePaintermage extends UnimplementedCard {
  constructor (game) {
    super(game, "Brushstroke Paintermage", "Unhinged", "UNH");
  }
}

module.exports = BrushstrokePaintermage;
