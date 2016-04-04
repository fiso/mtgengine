"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlanarGateBase = require("../setLEG/PlanarGate.js");

class PlanarGate extends PlanarGateBase {
  constructor(game) {
    super(game, "Planar Gate", "Masters Edition IV", "ME4");
  }
}

module.exports = PlanarGate;
