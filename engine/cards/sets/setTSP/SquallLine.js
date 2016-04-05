"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquallLine extends UnimplementedCard {
  constructor(game) {
    super(game, "Squall Line", "Time Spiral", "TSP");
  }
}

module.exports = SquallLine;
