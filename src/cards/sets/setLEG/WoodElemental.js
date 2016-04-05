"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Wood Elemental", "Legends", "LEG");
  }
}

module.exports = WoodElemental;
