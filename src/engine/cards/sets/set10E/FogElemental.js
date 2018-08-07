"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FogElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Fog Elemental", "Tenth Edition", "10E");
  }
}

module.exports = FogElemental;
