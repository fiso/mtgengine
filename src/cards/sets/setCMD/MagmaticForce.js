"use strict";
const Constants = require ("../../../Constants");
const MagmaticForceBase = require("../setBBD/MagmaticForce");

class MagmaticForce extends MagmaticForceBase {
  constructor (game) {
    super(game, "Magmatic Force", "Commander 2011", "CMD");
  }
}

module.exports = MagmaticForce;
