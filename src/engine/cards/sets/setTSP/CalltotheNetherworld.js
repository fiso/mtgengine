"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltotheNetherworld extends UnimplementedCard {
  constructor (game) {
    super(game, "Call to the Netherworld", "Time Spiral", "TSP");
  }
}

module.exports = CalltotheNetherworld;
