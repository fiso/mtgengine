"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavacoreElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Lavacore Elemental", "Planar Chaos", "PLC");
  }
}

module.exports = LavacoreElemental;
