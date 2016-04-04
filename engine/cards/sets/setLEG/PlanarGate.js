"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlanarGate extends Card {
  constructor(game) {
    super(game, "Planar Gate", "Legends", "LEG");
  }
}

module.exports = PlanarGate;
