"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisdainfulStroke extends UnimplementedCard {
  constructor (game) {
    super(game, "Disdainful Stroke", "Friday Night Magic", "pFNM");
  }
}

module.exports = DisdainfulStroke;
