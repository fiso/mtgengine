"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarGate extends UnimplementedCard {
  constructor (game) {
    super(game, "Planar Gate", "Masters Edition IV", "ME4");
  }
}

module.exports = PlanarGate;
