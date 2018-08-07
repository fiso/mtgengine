"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Wood Elemental", "Masters Edition IV", "ME4");
  }
}

module.exports = WoodElemental;
