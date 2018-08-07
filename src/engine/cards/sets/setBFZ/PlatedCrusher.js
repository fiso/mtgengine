"use strict";
const Constants = require ("../../../Constants");
const PlatedCrusherBase = require("../setBBD/PlatedCrusher");

class PlatedCrusher extends PlatedCrusherBase {
  constructor (game) {
    super(game, "Plated Crusher", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PlatedCrusher;
