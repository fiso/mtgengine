"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PartWater extends UnimplementedCard {
  constructor(game) {
    super(game, "Part Water", "Legends", "LEG");
  }
}

module.exports = PartWater;
