"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stabilizer extends UnimplementedCard {
  constructor(game) {
    super(game, "Stabilizer", "Scourge", "SCG");
  }
}

module.exports = Stabilizer;
