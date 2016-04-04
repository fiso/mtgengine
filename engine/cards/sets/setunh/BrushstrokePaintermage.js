"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrushstrokePaintermage extends Card {
  constructor(game) {
    super(game, "Brushstroke Paintermage", "Unhinged", "UNH");
  }
}

module.exports = BrushstrokePaintermage;
