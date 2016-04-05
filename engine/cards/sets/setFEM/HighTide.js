"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighTide extends UnimplementedCard {
  constructor(game) {
    super(game, "High Tide", "Fallen Empires", "FEM");
  }
}

module.exports = HighTide;
