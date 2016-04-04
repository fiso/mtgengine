"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerofFire extends Card {
  constructor(game) {
    super(game, "Power of Fire", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PowerofFire;
