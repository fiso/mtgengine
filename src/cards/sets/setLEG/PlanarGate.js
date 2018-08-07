"use strict";
const Constants = require ("../../../Constants");
const PlanarGateBase = require("../setME4/PlanarGate");

class PlanarGate extends PlanarGateBase {
  constructor (game) {
    super(game, "Planar Gate", "Legends", "LEG");
  }
}

module.exports = PlanarGate;
