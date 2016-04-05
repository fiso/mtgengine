"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Sudden Death", "Time Spiral", "TSP");
  }
}

module.exports = SuddenDeath;
