"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanopyDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Canopy Dragon", "Mirage", "MIR");
  }
}

module.exports = CanopyDragon;
