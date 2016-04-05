"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reiterate extends UnimplementedCard {
  constructor(game) {
    super(game, "Reiterate", "Time Spiral", "TSP");
  }
}

module.exports = Reiterate;
