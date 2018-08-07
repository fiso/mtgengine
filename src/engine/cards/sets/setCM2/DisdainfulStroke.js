"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisdainfulStroke extends UnimplementedCard {
  constructor (game) {
    super(game, "Disdainful Stroke", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DisdainfulStroke;
