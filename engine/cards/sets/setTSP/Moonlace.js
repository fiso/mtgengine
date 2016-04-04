"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Moonlace extends UnimplementedCard {
  constructor(game) {
    super(game, "Moonlace", "Time Spiral", "TSP");
  }
}

module.exports = Moonlace;
