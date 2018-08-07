"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeightofMemory extends UnimplementedCard {
  constructor (game) {
    super(game, "Weight of Memory", "Dominaria", "DOM");
  }
}

module.exports = WeightofMemory;
