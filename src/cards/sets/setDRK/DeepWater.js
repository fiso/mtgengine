"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepWater extends UnimplementedCard {
  constructor(game) {
    super(game, "Deep Water", "The Dark", "DRK");
  }
}

module.exports = DeepWater;
