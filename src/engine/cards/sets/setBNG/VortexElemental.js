"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VortexElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Vortex Elemental", "Born of the Gods", "BNG");
  }
}

module.exports = VortexElemental;
