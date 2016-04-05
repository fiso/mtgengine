"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chronosavant extends UnimplementedCard {
  constructor(game) {
    super(game, "Chronosavant", "Time Spiral", "TSP");
  }
}

module.exports = Chronosavant;
