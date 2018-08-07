"use strict";
const Constants = require ("../../../Constants");
const SandstormBase = require("../setME4/Sandstorm");

class Sandstorm extends SandstormBase {
  constructor (game) {
    super(game, "Sandstorm", "Mirage", "MIR");
  }
}

module.exports = Sandstorm;
