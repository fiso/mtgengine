"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sprout extends UnimplementedCard {
  constructor(game) {
    super(game, "Sprout", "Time Spiral", "TSP");
  }
}

module.exports = Sprout;
