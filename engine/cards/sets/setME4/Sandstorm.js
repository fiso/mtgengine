"use strict";
const Constants = require ("../../../Constants");
const SandstormBase = require("../setARN/Sandstorm");

class Sandstorm extends SandstormBase {
  constructor(game) {
    super(game, "Sandstorm", "Masters Edition IV", "ME4");
  }
}

module.exports = Sandstorm;
