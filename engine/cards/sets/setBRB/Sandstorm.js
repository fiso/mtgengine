"use strict";
const Constants = require ("../../../Constants");
const SandstormBase = require("../setARN/Sandstorm");

class Sandstorm extends SandstormBase {
  constructor(game) {
    super(game, "Sandstorm", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Sandstorm;
