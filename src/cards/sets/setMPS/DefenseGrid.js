"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefenseGrid extends UnimplementedCard {
  constructor (game) {
    super(game, "Defense Grid", "Kaladesh Inventions", "MPS");
  }
}

module.exports = DefenseGrid;
