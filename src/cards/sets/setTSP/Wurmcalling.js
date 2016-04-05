"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wurmcalling extends UnimplementedCard {
  constructor(game) {
    super(game, "Wurmcalling", "Time Spiral", "TSP");
  }
}

module.exports = Wurmcalling;
