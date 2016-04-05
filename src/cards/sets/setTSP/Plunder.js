"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plunder extends UnimplementedCard {
  constructor(game) {
    super(game, "Plunder", "Time Spiral", "TSP");
  }
}

module.exports = Plunder;
