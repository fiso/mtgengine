"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarGate extends UnimplementedCard {
  constructor(game) {
    super(game, "Planar Gate", "Legends", "LEG");
  }
}

module.exports = PlanarGate;
