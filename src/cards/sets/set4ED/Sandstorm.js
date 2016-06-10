"use strict";
const Constants = require ("../../../Constants");
const SandstormBase = require("../setARN/Sandstorm");

class Sandstorm extends SandstormBase {
  constructor (game) {
    super(game, "Sandstorm", "Fourth Edition", "4ED");
  }
}

module.exports = Sandstorm;
