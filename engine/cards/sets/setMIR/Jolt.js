"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Jolt extends Card {
  constructor(game) {
    super(game, "Jolt", "Mirage", "MIR");
  }
}

module.exports = Jolt;
