"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandGolem extends Card {
  constructor(game) {
    super(game, "Sand Golem", "Mirage", "MIR");
  }
}

module.exports = SandGolem;
