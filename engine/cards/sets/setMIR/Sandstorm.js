"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SandstormBase = require("../setARN/Sandstorm.js");

class Sandstorm extends SandstormBase {
  constructor(game) {
    super(game, "Sandstorm", "Mirage", "MIR");
  }
}

module.exports = Sandstorm;
