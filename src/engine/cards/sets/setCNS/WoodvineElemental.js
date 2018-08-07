"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodvineElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Woodvine Elemental", "Conspiracy", "CNS");
  }
}

module.exports = WoodvineElemental;
