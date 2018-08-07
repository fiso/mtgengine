"use strict";
const Constants = require ("../../../Constants");
const SandblastBase = require("../setHOU/Sandblast");

class Sandblast extends SandblastBase {
  constructor (game) {
    super(game, "Sandblast", "Fate Reforged", "FRF");
  }
}

module.exports = Sandblast;
