"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShorelineRaider extends UnimplementedCard {
  constructor(game) {
    super(game, "Shoreline Raider", "Invasion", "INV");
  }
}

module.exports = ShorelineRaider;
